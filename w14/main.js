// async function start() {
//     const data = await fetch(`https://api.weather.gov/gridpoints/OKX/35,35/forecast`)
//     const result = await data.json()
//     console.log(result.properties.periods[1].shortForecast)
// }

// async function start2() {
//     fetch(`https://api.weather.gov/gridpoints/OKX/35,35/forecast`)
//     .then(data => data.json())
//     .then(result => {
//         console.log(result.properties.periods[1].shortForecast)
//     })
// }

// start();

function getData() {
    return new Promise(function(resolve,reject){ 
        setTimeout(() => {
            reject(`HERE IS YOUR DATA`)
        }, 1)
    })
}

// function onSuccess() {

// }

// function onFailure() {
    
// }
async function start() {
    try{
        const result = await getData()
        //SUCCESS
    } catch (error) {
        //FAILURE
    }   
}

// async function start2() {
//    const result = await getData()
//    .catch(error => {
//     console.log(`Error: ${error}`)
//    })
//    console.log(result)
// }

start()