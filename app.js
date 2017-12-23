'use strict';
const path = require('path');
module.exports = app => {
  // beforeStart 读取文件开始挂载
  app.beforeStart(async () => {
    // 前挂载路由
    new app.loader.FileLoader(Object.assign({}, {
      directory: path.join(app.baseDir, 'app/router'),
      inject: app,
      target: {},
      initializer: (obj, opt) => {
        // 路由挂载
        app.router.namespace(
          opt.pathName.replace(/router/g, '')
            .split('.')
            .join('/'));
        return obj;
      },
    })).load();
  });
};
