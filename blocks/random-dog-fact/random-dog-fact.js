export default function decorate(block) {
    const data = "This is an awsome fun fact about dogs! " + Math.random();

    block.innerText = data;
}
