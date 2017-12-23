'use strict';
const Router = require('egg-core/lib/utils/router');
const ROUTER = Symbol.for('Mount#router');
const SUBROUTER = Symbol.for('Mount#subrouter');
module.exports = {
  // override EggCore#router
  get router() {
    if (this[ROUTER]) {
      return this[ROUTER];
    }
    const router = new Router({ sensitive: true }, this);
    // proxy handler fn
    const handler = {
      get(target, propKey, receiver) {
        if (router.methods.indexOf(propKey.toUpperCase()) >= 0) {
          const origMethod = target[propKey];
          const subRouter = target.getNamespace();
          return function(...args) {
            args[0] = (subRouter || '') + args[0];
            return origMethod.apply(this, args);
          };
        }
        return Reflect.get(target, propKey, receiver);
      },
    };
    /**
     * 设置父级路由
     * @param {String} url the sub router
     * @return {Symbol#SUBROUTER} the new subroute name
     */
    router.namespace = url => {
      this[SUBROUTER] = url;
      return this[SUBROUTER];
    };
    /**
     * 得到当前父级路由
     * @return {Symbol#SUBROUTER} the subroute name
     */
    router.getNamespace = () => {
      return this[SUBROUTER];
    };
    this[ROUTER] = new Proxy(router, handler);
    this.use(this[ROUTER].middleware());
    return this[ROUTER];
  },
};
