class AttributeNotFound extends Error {
  constructor(attribute: string, selector: string) {
    const message: string = `${attribute}. Selector: ${selector}.`
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = this.constructor.name
  }
}

export { AttributeNotFound }
