'use strict';

const mock = require('egg-mock');

describe('test/mount.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mount-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /test', () => {
    return app.httpRequest()
      .get('/test')
      .expect('hi, mount')
      .expect(200);
  });
  it('should GET /subRouter/test', () => {
    return app.httpRequest()
      .get('/subRouter/test')
      .expect('hi, mount')
      .expect(200);
  });
});
