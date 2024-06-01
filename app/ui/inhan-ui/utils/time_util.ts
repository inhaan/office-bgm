export async function wait(time = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, time * 1000);
    });
}
