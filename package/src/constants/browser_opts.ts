type ModeType = boolean | 'shell'

const browser_opts: {
  headless: ModeType
  slowMo: number
  devtools: boolean
  executablePath: string
  args: string[]
} = {
  headless: true,
  slowMo: 1,
  devtools: false,
  executablePath: '/usr/bin/chromium-browser',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
}

export { browser_opts }
