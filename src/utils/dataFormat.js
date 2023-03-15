
export function objectToUrlQueryString(params) {
	if (params)
		return '';
	let queryString = Object.entries(params).reduce((prev, current) => 
                        prev + `&${current[0]}=${current[1]}`, '');
	queryString = queryString.slice(1, queryString.length);
	return queryString;
}