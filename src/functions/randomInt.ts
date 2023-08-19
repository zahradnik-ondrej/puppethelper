function randomInt(min: number = 0, max: number = 9): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

export {randomInt}