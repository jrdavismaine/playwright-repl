const repl = require("node:repl");
const { program } = require("commander");
const { chromium, firefox, webkit } = require("playwright");
const init = require("./init");

repl.builtinModules = ["playwright"];

program.option("--headed");
program.option("--timeout <value>", "Timeout in ms");
program.option("--url <value>", "Load URL");
program.parse();

const opts = program.opts();
const { headed, timeout } = opts;
const DEFAULT_TIMEOUT = 4000;
const options = {
  headed,
  timeout: timeout ?? DEFAULT_TIMEOUT,
};
if (opts.url) {
  options["url"] = opts.url;
}

const replServer = repl.start({ useColors: true, prompt: "playwright-repl> " });
replServer.defineCommand("chromium", {
  help: "Load chromium",
  async action() {
    this.clearBufferedCommand();
    const page = await init(chromium, options);
    this.context.page = page;
    this.displayPrompt();
  },
});

replServer.defineCommand("firefox", {
  help: "Load firefox",
  async action() {
    this.clearBufferedCommand();
    const page = await init(firefox, options);
    this.context.page = page;
    this.displayPrompt();
  },
});

replServer.defineCommand("webkit", {
  help: "Load webkit",
  async action() {
    this.clearBufferedCommand();
    const page = await init(webkit, options);
    this.context.page = page;
    this.displayPrompt();
  },
});

replServer.on("exit", () => {
  process.exit();
});
