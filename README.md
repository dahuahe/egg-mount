# egg-mount

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mount.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mount
[travis-image]: https://img.shields.io/travis/eggjs/egg-mount.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mount
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mount.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mount?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mount.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mount
[snyk-image]: https://snyk.io/test/npm/egg-mount/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mount
[download-image]: https://img.shields.io/npm/dm/egg-mount.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mount

<!--
Description here.
-->

## Install

```bash
$ npm i egg-mount --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mount = {
  enable: true,
  package: 'egg-mount',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mount = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
