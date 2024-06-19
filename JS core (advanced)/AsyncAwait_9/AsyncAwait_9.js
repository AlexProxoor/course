// Напишите функцию, которая использует
// async/await для загрузки данных с удаленного
// сервера (например, с помощью API) и
// возвращает полученный результат

async function fetchData(url) {
    try {
        if (!url) {
            throw new Error('Упс. URL не был предоставлен')
        }
        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        let data = await response.json()
        return data
    } catch (err) {
        console.err('Ошибка при загрузке данных:', err)
        return null
    }
}

(async () => {
    let username = 'AlexProxoor'
    let url = `https://api.github.com/users/${username}`
    let data = await fetchData(url)
    console.log(data)
})()




