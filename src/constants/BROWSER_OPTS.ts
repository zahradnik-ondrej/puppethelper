type HeadlessOption = boolean | 'new'
const BROWSER_OPTS: {headless: HeadlessOption, slowMo: number, devtools: boolean} = {
  headless: 'new',
  slowMo: 10,
  devtools: false,
}

export {BROWSER_OPTS}