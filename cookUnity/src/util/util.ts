export const getParam = (apiUrl: string, param: string) => {
    const queryStringIndex = apiUrl.indexOf('?');

    const queryString = apiUrl.slice(queryStringIndex + 1);
    const searchParams = new URLSearchParams(queryString);
    return searchParams.get(param);
};