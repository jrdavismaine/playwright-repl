const cdpURL = process.env.CDP ?? "http://localhost:9222";

module.exports = async (browserHandle) => {
  const browser = await browserHandle.connectOverCDP(cdpURL);
  const [context] = browser.contexts();
  const [page] = context.pages();
  return page;
};
