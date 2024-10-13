const repl = require("node:repl");
const { program } = require("commander");
const { chromium, firefox, webkit } = require("playwright");
const init = require("./init");

program.option("--headed");
program.parse();
const opts = program.opts();

repl.builtinModules = ["playwright"];

const options = {
  headed: opts.headed,
};

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
