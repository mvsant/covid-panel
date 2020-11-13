const baseUrl = "https://coronavirus-19-api.herokuapp.com/countries/";

export async function index(setData) {
    try{
        await fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => setData(data));
    }
    catch (err) {
        console.error('err', err);
      }
};

export async function request(setData, country) {
    try{
        await fetch(`${baseUrl}${country}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }
    catch (err) {
        console.error('err', err);
      }
};