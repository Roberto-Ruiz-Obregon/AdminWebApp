/**
 * This function formats an object into an URL querystring
 *
 * @param {Object} params - parameters to format
 * @return {String} - returns a querystring, could be an empty string
 */
export function objectToUrlQueryString(params) {
	return Object.entries(params).reduce((queryString, [key, value]) => (
		Array.isArray(value) ? `${queryString}${key}=${value.join(',')}&`
		: `${queryString}${key}=${value}&`
	), '').slice(0, -1); // Remove the trailing '&'
}
