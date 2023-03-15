import jwt_decode from 'jwt-decode';
import { retreiveAdmin } from '../client/admin';

/**
 * A function that returns access/refresh tokens based on whether they're requested.
 * @returns { String | null} The access and refresh tokens or null if neither were requested or found in localStorage.
 */
export function getToken() {
	let token = localStorage.getItem('authToken');
	if (token != null && token !== '')
		return token;
	return null;
}

/**
 * @function setToken
 * @param {String} token - the access token to set.
 * @returns {String|null} token
 */
export function setToken(token) {
	if (!(typeof token === "string") || !token)
		return null;

	localStorage.setItem('authToken', token);
	return token;
}

export async function setAdminUserSaved(userId) {
	if (!userId)
		return null;
	const response = await retreiveAdmin(userId);
	const user = response.data.document;
	if (user) {
		localStorage.setItem('adminUser', JSON.stringify(user));
		return user;
	}
	return null;
}


export function getUserSaved() {
	let user = localStorage.getItem('adminUser');
	if (user) {
		user = JSON.parse(user);
		return user;
	}
	return null;
}


export function isAuthenticated() {
	const user = getUserSaved();
	const token = getToken();
	if (user && token)
		if (jwt_decode(token).id === user._id)
			return true;
	return false;
}