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

The following sections explain how to load chromium, webkit or firefox, connect to a chromium CDP sesssion.

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

Returns the first open tab, all other tabs are ignored.

### Default URL

URL defaults to localhost:9229 when the CDP environment variable is not set.

### Remote

URL of remote CDP session.

```
.cdp
await page.title();
await page.screenshot({path: '9229page.png'});
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
