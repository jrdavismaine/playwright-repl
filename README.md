# Playwright REPL

A repl used to interact with playwright.

# Install

```
git clone https://github.com/jdavis61/playwright-repl.git
cd playwright-repl
yarn
```

# Load REPL in headed mode.

```
yarn repl --headed
npm run repl -- --headed
```

# Load REPL in headless mode.

```
yarn repl
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
