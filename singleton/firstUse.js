// import FancyLogger from "./fancyLogger.js";
// const logger = new FancyLogger()

import {logger} from "./fancyLogger.js" // we are using the same instance for our all components

export const logFirstImplementation = () => {
  logger.printLogCount()
  logger.log('First')
  logger.printLogCount()
}
