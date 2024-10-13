module.exports = async (browserHandle, opts) => {
  const { headed, timeout } = opts;
  const browser = await browserHandle.launch({
    headless: !headed,
  });
  const context = await browser.newContext();
  return context.newPage();
};
