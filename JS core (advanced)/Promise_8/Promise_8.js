// Напишите функцию, выполняющую серию
// асинхронных операций последовательно,
// используя Promises.

function seriesOper(arr) {

    let startPromise = Promise.resolve()

    let finalPromise = arr.reduce((prevPromise, currentPromise) => {
        return prevPromise.then(() => {

            return currentPromise()
        })
    }, startPromise)

    return finalPromise
}

function processImage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Image processing completed")
            resolve()
        }, 1500)
    })
}

function loadConfiguration() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Configuration loaded")
            resolve()
        }, 1500)
    })
}

let arr = [processImage, loadConfiguration]

seriesOper(arr)
    .then(() => {
        console.log("All operations completed successfully!")
    })
    .catch((error) => {
        console.error("Error during operations:", error)
    })
