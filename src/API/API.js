const kinopoiskapiunofficialRequest = (url) => {
    return fetch(url, {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '1eb612fe-4b9a-4151-94c8-1e24e42c687b',
        },
        cors: 'no-cors'
    });
}

export const topFilmsRequest = () => {
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1')
}
export const bestFilmsRequest = () => {
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1')
}