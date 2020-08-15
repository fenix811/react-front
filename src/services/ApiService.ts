//const API_HOST_NAME = 'localhost'  //TODO remove if no need
export const ProductApi = {
    getProducts(): Promise<any> {
        return fetch(`GetProducts`)
//        .then(response => response.json() as Promise<WeatherForecast[]>)
    },
};
