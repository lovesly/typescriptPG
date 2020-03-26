import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';
// 神奇，有个字面量接口类型，就不会报 any 的错误了
function axios(config: AxiosRequestConfig): void {
  xhr(config);
}

export default axios;