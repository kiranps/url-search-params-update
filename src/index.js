import URLSearchParamsPoylfill from 'url-search-params';

export default class URLQueryChange {
  get(key) {
    const params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search)
    return params.get(key)
  }

  set() {
    const params = window.URLSearchParams ? new URLSearchParams(location.search) : URLSearchParamsPoylfill(location.search)
    params.set(key, val)
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
  }
}
