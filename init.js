module.exports = async (browserHandle, options) => {
  const { headed, timeout } = options;
  const browser = await browserHandle.launch({
    headless: !headed,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  page.setDefaultTimeout(parseInt(timeout));
  if (options.url) {
    await page.goto(options.url);
  }
  return page;
};
