const key = 'TJVd1bQW3XIG7wYhAu4FHuc8deVF4ESR';

// get weather information 
const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]
}



// get city information
const getCity=  async (city) => {
    // base URL that request is being made to
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    // '?' in URL means we are adding parameters
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]
}





// testing APIs
// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key)
//     }).then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))







    