async function timeout(seconds: number = 5): Promise<unknown> {
  const milliseconds: number = seconds * 1000
  return new Promise((resolve): void => {
    setTimeout(resolve, milliseconds)
  })
}

export { timeout }
