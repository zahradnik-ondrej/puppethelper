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

```typescript
clearManual(page: Page, selector: string, attribute: string = 'value')
```

```typescript
click(page: Page, selector: string, timeout: number = 30)
```

```typescript
executeCommand(command: string, password?: string)
```

```typescript
expectAttribute(page: Page, selector: string, attribute: string, value: string, timeout: number = 30)
```

```typescript
expectText(page: Page, selector: string, text: string, timeout: number = 30)
```

```typescript
getAttribute(page: Page, selector: string, attribute: string)
```

```typescript
getText(page: Page, selector: string)
```

```typescript
randomInt(min: number = 0, max: number = 9)
```

```typescript
timeout(seconds: number = 5)
```

```typescript
type(page: Page, selector: string, text: string, timeout: number = 30)
```

```typescript
waitForSelector(page: Page, selector: string, timeout: number = 30)
```


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
