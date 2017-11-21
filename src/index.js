import URLSearchParamsPoylfill from 'url-search-params';

export default class URLSearchParamsUpdate {
  static get(key) {
    const params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search)
    return params.get(key)
  }

  static set(key, value) {
    const params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search)
    params.set(key, value)
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
  }

  static delete(key) {
    const params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search)
    params.delete(key)
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
  }
}
