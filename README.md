<div align="center">

# 🧰 puppethelper

### A Puppeteer utility package for web automation.

*(The instructions below have been made to work on **Linux** operating systems, specifically on **Ubuntu 22.04** along with the prerequisite of having **Git** installed on your system.)*

</div>

---

### Installation of the package:

1. `sudo apt update`

2. `wget -qO- https://deb.nodesource.com/setup_20.x | sudo -E bash -`

3. `sudo apt install -y nodejs`

4. `npm install puppethelper`

---

### Running the demo:

1. Run the commands shown in [Installation of the package](https://github.com/zahradnik-ondrej/puppethelper?tab=readme-ov-file#installation-of-the-package).

2. `git clone https://github.com/zahradnik-ondrej/puppethelper.git`

3. `cd puppethelper/bot-demo`

4. `npm start`

---

### Functions:

```typescript
// clears a text field
clear(page: Page, selector: string)
```

```typescript
// clicks on an element
click(page: Page, selector: string, timeout: number = 30)
```

```typescript
// waits for an element to be loaded
findElement(page: Page, selector: string, timeout: number = 30)
```

```typescript
// returns the attribute value of an element
getAttribute(page: Page, selector: string, attribute: string)
```

```typescript
// returns the text within an element
getText(page: Page, selector: string)
```

```typescript
// waits for a specified number of seconds
timeout(seconds: number = 5)
```

```typescript
// types a string into a text field
type(page: Page, selector: string, text: string, timeout: number = 30)
```

### Errors:

```typescript
AttributeNotFound(attribute: string, selector: string)
```

```typescript
ElementNotFound(selector: string)
```

### Constants:

```typescript
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
```

```typescript
const page_opts: { default_timeout: number } = {
  default_timeout: 30000,
}
```

### Types:

```typescript
type SelectorType = 'css' | 'xpath'
```
