# Playwright REPL

A repl used to interact with playwright.

# Install

```
git clone https://github.com/jdavis61/playwright-repl.git
cd playwright-repl
npm i
```

# Load REPL in headed mode.

```
npm run repl -- --headed
```

# Load REPL in headless mode.

```
npm run repl
```

# Interact with playwright

## Chrome

Enter these commands into the REPL.

```
.chromium
await page.goto('https://www.google.com');
await page.screenshot({path: 'google.png'});
```

## Firefox

Enter these commands into the REPL.

```
.firefox
await page.goto('https://www.google.com');
await page.screenshot({path: 'google.png'});
```

## Webkit

Enter these commands into the REPL.

```
.webkit
await page.goto('https://www.google.com');
await page.screenshot({path: 'google.png'});
```

## Other CLI options

| Command | Default Value | Description                    |
| ------- | ------------- | ------------------------------ |
| timeout | 3000 ms       | Set global timeout             |
| url     | Optional      | Pass URL for initial page load |

## Examples

### timeout 10 seconds

```
npm run repl -- --headed --timeout 10000
.webkit
```

### Load page

```
npm run repl -- --headed  --url http://127.0.0.1:8080/test.html
.chromium
```
