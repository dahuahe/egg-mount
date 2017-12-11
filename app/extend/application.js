const Router = require('egg-core/lib/utils/router');
const ROUTER = Symbol.for('Mount#router');
const SUBROUTER = Symbol.for('Mount#subrouter');
module.exports = {
  //override EggCore#router
  get router() {
    //sing
    if (this[ROUTER]) {
      return this[ROUTER];
    }
    //proxy handler
    let handler = {
      get: function(target, propKey,receiver) {
        if(['head','get','put','post','delete'].indexOf(propKey)>=0){
          const origMethod = target[propKey];
          let subRouter = target._getnamespace();
          return function(...args) {
            args[0] = (subRouter || '') + args[0];
            return origMethod.apply(this, args);
          };
        }
        return Reflect.get(target, propKey, receiver);
      }
    };

    let _router = new Router({sensitive: true}, this);
    _router.namespace = (url) => {
      this[SUBROUTER] = url;
      return this[SUBROUTER] ;
    };
    _router._getnamespace = () => {
      return this[SUBROUTER] ;
    };
    //proxy
    const router = this[ROUTER] = new Proxy(_router, handler);
    this.use(router.middleware());
    return router;
  }
};
