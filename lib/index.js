'use strict';

exports.__esModule = true;
exports.default = undefined;

var _urlSearchParams = require('url-search-params');

var _urlSearchParams2 = _interopRequireDefault(_urlSearchParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URLSearchParamsUpdate = function () {
  function URLSearchParamsUpdate() {
    _classCallCheck(this, URLSearchParamsUpdate);
  }

  URLSearchParamsUpdate.get = function get(key) {
    var params = window.URLSearchParams ? new URLSearchParams(location.search) : (0, _urlSearchParams2.default)(location.search);
    return params.get(key);
  };

  URLSearchParamsUpdate.set = function set(key, value) {
    var params = window.URLSearchParams ? new URLSearchParams(location.search) : (0, _urlSearchParams2.default)(location.search);
    params.set(key, value);
    window.history.replaceState({}, '', location.pathname + '?' + params);
  };

  URLSearchParamsUpdate.delete = function _delete(key) {
    var params = window.URLSearchParams ? new URLSearchParams(location.search) : (0, _urlSearchParams2.default)(location.search);
    params.delete(key);
    window.history.replaceState({}, '', location.pathname + '?' + params);
  };

  return URLSearchParamsUpdate;
}();

exports.default = URLSearchParamsUpdate;
module.exports = exports['default'];