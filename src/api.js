const baseUrl = "https://coronavirus-19-api.herokuapp.com/countries/";

export async function index(setData) {
    await fetch(baseUrl, { credentials: 'omit' })
        .then((response) => response.json())
        .then((data) => setData(data));
}

export async function request(setData, country) {
    await fetch(`${baseUrl}${country}`, { cache:"force-cache",mode:"cors",credentials:"same-origin"})
        .then((response) => response.json())
        .then((data) => setData(data));
}