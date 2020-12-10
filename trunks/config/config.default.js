/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607503521305_5122';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 数据库配置
  exports.mongoose = {
    client: {
      url: 'mongodb://trunks:mongo1998@149.129.59.121:27017/trunks',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
