function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import URLSearchParamsPoylfill from 'url-search-params';

var URLSearchParamsUpdate = function () {
  function URLSearchParamsUpdate() {
    _classCallCheck(this, URLSearchParamsUpdate);
  }

  URLSearchParamsUpdate.get = function get(key) {
    var params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search);
    return params.get(key);
  };

  URLSearchParamsUpdate.set = function set(key, value) {
    var params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search);
    params.set(key, value);
    window.history.replaceState({}, '', location.pathname + '?' + params);
  };

  URLSearchParamsUpdate.delete = function _delete(key) {
    var params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search);
    params.delete(key);
    window.history.replaceState({}, '', location.pathname + '?' + params);
  };

  return URLSearchParamsUpdate;
}();

export { URLSearchParamsUpdate as default };