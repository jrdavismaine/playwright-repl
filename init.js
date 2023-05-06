module.exports = async (browserHandle, isHeaded) => {
  const browser = isHeaded ?
    await browserHandle.launch({ headless: false }) :
    await browserHandle.launch();
  const context = await browser.newContext();
  return context.newPage();
};
