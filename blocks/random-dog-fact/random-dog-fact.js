export default function decorate(block) {
    const response = await fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
    const data = response.json()
    console.log(data)
}
