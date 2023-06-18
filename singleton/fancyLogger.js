class FancyLogger { // we are not exporting our class
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  printLogCount() {
    console.log(`${this.logs.length} logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export { logger }; // we are exporting logger, which will be used as the only logger in our application
