import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index';

// xmlhttprequest?? I thought axios is using fetch api?
export default function xhr(config: AxiosRequestConfig): AxiosPromise  {
  return new Promise((resolve) => {
    const { data = null, url, method = 'get', headers, responseType } = config;
    // 可以看下源码和高程，肯定有向下兼容的实现
    // 另外，我们封装请求，好像大部分基于 fetch
    const request = new XMLHttpRequest();

    if (responseType) {
      request.responseType = responseType;
    }

    request.open(method.toUpperCase(), url, true);

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      } else {
        const responseHeaders = request.getAllResponseHeaders();
        const responseData = responseType !== 'text' ? 
                                    request.response : 
                                    request.responseText;
        const response: AxiosResponse = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request,
        };
        resolve(response);
      }
    }

    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name];
      } else {
        request.setRequestHeader(name, headers[name]);
      }
    });
    request.send(data);
  });
}

// 使用 express 的时候，res，req 上面有很多自己的方法。 比如 res.json 怎么实现的呢