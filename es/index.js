function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import URLSearchParamsPoylfill from 'url-search-params';

var URLQueryChange = function () {
  function URLQueryChange() {
    _classCallCheck(this, URLQueryChange);
  }

  URLQueryChange.prototype.get = function get(key) {
    var params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search);
    return params.get(key);
  };

  URLQueryChange.prototype.set = function set(key, value) {
    var params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search);
    params.set(key, value);
    window.history.replaceState({}, '', location.pathname + '?' + params);
  };

  return URLQueryChange;
}();

export { URLQueryChange as default };