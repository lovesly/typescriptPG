import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';
import { buildURL } from './helpers/url';
// 神奇，有个字面量接口类型，就不会报 any 的错误了
function axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

// 为什么要大费周章又过滤有干啥的，我记得有 formData 格式之类的
// 用 xmlHttpRequest 不需要整这么麻烦来着。。
function processConfig(config: AxiosRequestConfig): void {
  config.url = transform(config);
}

function transform(config: AxiosRequestConfig): string {
  const { url, params } = config;
  // 空字符串会怎么样呢？
  return buildURL(url, params);
}

export default axios;