// import FancyLogger from "./fancyLogger";
// const logger = new FancyLogger()

import {logger} from "./fancyLogger.js" // we are using the same instance for our all components

export const logSecondImplementation = () => {
  logger.printLogCount()
  logger.log('Second')
  logger.printLogCount()
}
