# puppethelper
A Puppeteer utility module for web automation.

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
* `PAGE_OPTS`

### Scripts:
* `custom-mocha-spec-reporter.js`
