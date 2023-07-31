async function timeout(seconds: number = 5) {
  const milliseconds: number = seconds * 1000
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}
