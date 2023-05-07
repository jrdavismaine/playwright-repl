const repl = require('node:repl');
const { program } = require('commander');
const { chromium, firefox, webkit } = require('playwright'); 
const init = require('./init');

program.option('--headed');
program.parse();
const opts = program.opts();
const isHeaded = opts.headed;

repl.builtinModules = [
  'playwright',
];

const replServer = repl.start({ useColors: true, prompt: 'playwright-repl> ' });

replServer.defineCommand('chromium', {
  help: 'Load chromium',
  async action() {
    this.clearBufferedCommand();
    const page = await init(chromium, isHeaded);
    this.context.page = page;
    this.displayPrompt();
  }
});

replServer.defineCommand('firefox', {
  help: 'Load firefox',
  async action() {
    this.clearBufferedCommand();
    const page = await init(firefox, isHeaded);
    this.context.page = page;
    this.displayPrompt();
  }
});

replServer.defineCommand('webkit', {
  help: 'Load webkit',
  async action() {
    this.clearBufferedCommand();
    const page = await init(webkit, isHeaded);
    this.context.page = page;
    this.displayPrompt();
  }
});

replServer.on('exit', () => {
  process.exit();
});
