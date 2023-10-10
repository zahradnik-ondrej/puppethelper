type HeadlessOption = boolean | 'new'

const BROWSER_OPTS: {headless: HeadlessOption, slowMo: number, devtools: boolean, executablePath: string} = {
  headless: 'new',
  slowMo: 1,
  devtools: false,
  executablePath: '/usr/bin/chromium-browser',
}

export {BROWSER_OPTS}