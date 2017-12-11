const path = require('path');
module.exports = app => {
  //beforeStart 读取文件开始挂载
  app.beforeStart(async () => {
    // 前挂载路由
    new app.loader.FileLoader(Object.assign({}, {
      directory: path.join(app.baseDir, 'app/router'),
      inject: app,
      match: '',
      target: {},
      initializer: (obj, opt) => {
        return obj;
      }
    })).load();
  });
};
