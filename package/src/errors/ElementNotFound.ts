class ElementNotFound extends Error {
  constructor(selector: string) {
    const message: string = `Selector: ${selector}.`
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = this.constructor.name
  }
}

export { ElementNotFound }
