# Playwright `connectOverCDP` Examples

## 1. Reuse an already-open browser session (no new profile)

```javascript
const { chromium } = require('playwright');

async function scrapeActivePage() {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  
  // Work with whatever page the user already has open
  const [context] = browser.contexts();
  const [page] = context.pages();
  
  console.log('Current URL:', page.url());
  console.log('Title:', await page.title());
  
  const text = await page.innerText('body');
  console.log('Body text:', text.slice(0, 500));
  
  await browser.disconnect(); // disconnect, don't close — keeps browser open
}

scrapeActivePage();
```

---

## 2. Inject automation into a logged-in session (bypass auth)

```javascript
const { chromium } = require('playwright');

async function autoFillForm() {
  // User is already logged in — no need to handle auth
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const [context] = browser.contexts();
  const [page] = context.pages();

  await page.goto('https://myapp.internal/new-record');
  await page.fill('#name', 'Jane Doe');
  await page.fill('#email', 'jane@example.com');
  await page.selectOption('#role', 'admin');
  await page.click('button[type="submit"]');
  await page.waitForSelector('.success-message');
  
  console.log('Form submitted successfully');
  await browser.disconnect();
}

autoFillForm();
```

---

## 3. Take screenshots of multiple tabs

```javascript
const { chromium } = require('playwright');
const path = require('path');

async function screenshotAllTabs() {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  
  for (const context of browser.contexts()) {
    for (const [i, page] of context.pages().entries()) {
      const filename = `tab-${i}-${Date.now()}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`Saved ${filename} — ${page.url()}`);
    }
  }
  
  await browser.disconnect();
}

screenshotAllTabs();
```

---

## 4. Connect to a remote browser (e.g. a cloud VM or Docker container)

```javascript
const { chromium } = require('playwright');

async function connectRemote() {
  // Chrome running in Docker: docker run --rm -p 9222:9222 zenika/alpine-chrome
  // --remote-debugging-address=0.0.0.0 --remote-debugging-port=9222
  const browser = await chromium.connectOverCDP('http://192.168.1.100:9222');

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  await page.screenshot({ path: 'remote.png' });
  
  await browser.disconnect();
}

connectRemote();
```

---

## 5. Watch for network requests on an existing page

```javascript
const { chromium } = require('playwright');

async function monitorRequests() {
  const browser = await chromium.connectOverCDP('http://localhost:9222');
  const [context] = browser.contexts();
  const [page] = context.pages();

  page.on('request', req => {
    if (req.resourceType() === 'fetch' || req.resourceType() === 'xhr') {
      console.log('XHR/Fetch:', req.method(), req.url());
    }
  });

  page.on('response', res => {
    if (res.status() >= 400) {
      console.log('Error response:', res.status(), res.url());
    }
  });

  console.log('Monitoring requests on:', page.url());
  console.log('Interact with the page manually — watching for 30s...');
  await page.waitForTimeout(30_000);
  
  await browser.disconnect();
}

monitorRequests();
```

---

> **Note:** Use `browser.disconnect()` instead of `browser.close()` to leave the user's browser running after your script finishes.
