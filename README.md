<div align="center">

# 🧰 puppethelper

### A Puppeteer utility module for web automation.

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

</div>

***

### Functions:

```typescript
clear(page: Page, selector: string)
```

Clears a text field using **Document**'s [`querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) function.

```typescript
clearManual(page: Page, selector: string, attribute: string = 'value')
```

Clears a text field by simulating user input of pressing the **Backspace** key.

```typescript
click(page: Page, selector: string, timeout: number = 30)
```

Clicks on an element by utilizing the [`waitForSelector()`](https://github.com/zahradnik-ondrej/puppethelper/blob/master/src/functions/waitForSelector.ts) function and **Puppeteer**'s [`Page.click()`](https://pptr.dev/api/puppeteer.page.click) function.

```typescript
executeCommand(command: string, password?: string)
```

```typescript
expectAttribute(page: Page, selector: string, attribute: string, value: string, timeout: number = 30)
```

Expects a selector's attribute to be of a specified value by utilizing the [`waitForSelector()`](https://github.com/zahradnik-ondrej/puppethelper/blob/master/src/functions/waitForSelector.ts) function, the [`getAttribute()`](https://github.com/zahradnik-ondrej/puppethelper/blob/master/src/functions/getAttribute.ts) function and **Chai**'s [`expect()`](https://www.chaijs.com/api/bdd/) function.

```typescript
expectText(page: Page, selector: string, text: string, timeout: number = 30)
```

Expects a specified text within an element based on the provided **CSS** selector by utilizing the [`waitForSelector()`](https://github.com/zahradnik-ondrej/puppethelper/blob/master/src/functions/waitForSelector.ts) function, the [`getText()`](https://github.com/zahradnik-ondrej/puppethelper/blob/master/src/functions/getText.ts) function and **Chai**'s [`expect()`](https://www.chaijs.com/api/bdd/) function.

```typescript
getAttribute(page: Page, selector: string, attribute: string)
```

```typescript
getText(page: Page, selector: string)
```

```typescript
randomInt(min: number = 0, max: number = 9)
```

Generates a random integer within a specified range by utiizing the [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function.

```typescript
timeout(seconds: number = 5)
```

```typescript
type(page: Page, selector: string, text: string, timeout: number = 30)
```

Types a string into a text field by utilizing the [`waitForSelector()`](https://github.com/zahradnik-ondrej/puppethelper/blob/master/src/functions/waitForSelector.ts) function and **Puppeteer**'s [`Page.type()`](https://pptr.dev/api/puppeteer.page.type) function.

```typescript
waitForSelector(page: Page, selector: string, timeout: number = 30)
```

Waits for a element to be loaded by checking its presence every **500ms** until a timeout period has elapsed.

### Errors:
* `CustomError`
* `SelectorNotFound`

### Constants:

* `BROWSER_OPTS`

```typescript
const BROWSER_OPTS: {headless: HeadlessOption, slowMo: number, devtools: boolean} = {
    headless: 'new',
    slowMo: 1,
    devtools: false,
}
```

* `PAGE_OPTS`

```typescript
const PAGE_OPTS: {DEFAULT_TIMEOUT: number} = {
  DEFAULT_TIMEOUT: 30000,
}
```

### Scripts:
* `custom-mocha-spec-reporter.js`
