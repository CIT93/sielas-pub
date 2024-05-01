// async function start() {
//     try {
//     const data = await fetch(`https://api.weather.gov/gridpoints/HNX/52,100/forecast`)
//     const result = await data.json()
//     onSuccess(result.properties.periods[0].temperature)
//     }
//     catch(e) {
//         onError(error);
//     }

// }

// function onSuccess(success) {
//     console.log(`SUCCESS: ${success}`)
// }
// function onError(error) {
//     console.log(`ERROR: ${error}`)
// }
// // async function start2() {
// //     fetch(`https://api.weather.gov/gridpoints/OKX/35,35/forecast`)
// //     .then(data => data.json())
// //     .then(result => {
// //         console.log(result.properties.periods[1].shortForecast)
// //     })
// // }

// // start();

// // function getData() {
// //     return new Promise(function(resolve,reject){ 
// //         setTimeout(() => {
// //             reject(`HERE IS YOUR DATA`)
// //         }, 1)
// //     })
// // }

// // // function onSuccess() {

// // // }

// // // function onFailure() {
    
// // // }
// // async function start() {
// //     try{
// //         const result = await getData()
// //         //SUCCESS
// //     } catch (error) {
// //         //FAILURE
// //     }   
// // }

// // // async function start2() {
// // //    const result = await getData()
// // //    .catch(error => {
// // //     console.log(`Error: ${error}`)
// // //    })
// // //    console.log(result)
// // // }

// start()

const url = "https://banana.pudding"

    const request = new Request(url, {
        headers: {
            "Authorization": "Bearer 123"
        }
    })

async function getData() {
    try{
        const response = await fetch(request)
        const data = await response.json()
        if(response.status === 200) {
        console.log("Success". data)
        
    } else {
        console.log("Server Error", data.error.message)
    }
    } catch(error) {
        console.log("Error", error)
    }
}

getData()
