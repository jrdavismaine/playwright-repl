# Playwright REPL

A repl used to interact with playwright.

# Install

```
git clone https://github.com/jrdavismaine/playwright-repl.git
cd playwright-repl
npm install
npx playwright install
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

The following sections explain how to load chromium, webkit, firefox or connect to a chromium CDP sesssion.

## Chrome

```
.chromium
await page.goto('https://www.google.com');
await page.screenshot({path: 'google.png'});
```

## Firefox

```
.firefox
await page.goto('https://www.google.com');
await page.screenshot({path: 'google.png'});
```

## Webkit

```
.webkit
await page.goto('https://www.google.com');
await page.screenshot({path: 'google.png'});
```

## CDP

Connect to a chromium browser instance using the CDP protocol. Set the CDP environment variable to connect to a remote CDP browser session. If not set, the default connection will be localhost:9229. Note that this feature only connects to the first tab of the first active CDP context.

```
.cdp
await page.title();
await page.screenshot({path: 'cdp.png'});
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
