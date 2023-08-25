export async function getRandomNumber() {
    // Generate a random number between 0 and 100
    // (with a delay, so that we can see it)
    const number = Math.floor(Math.random() * 101);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return number;
}
