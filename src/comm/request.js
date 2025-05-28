import axios from "axios";

// 创建axios实例
const req = axios.create({
  baseURL: "https://op1.lan:10443/cgi-bin/",
  timeout: 9000
});

// 请求拦截器
req.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const head_token = token ? `Bearer ${token}` : "";
    config.headers.Authorization = head_token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
req.interceptors.response.use(
  (resp) => resp.data,
  (err) => {
    const errMap = {
      400: "客户端错误,请检查请求参数",
      401: "客户端错误,请检查登录状态",
      403: "拒绝访问,请检查登录权限",
      404: "资源未找到",
      500: "服务器端错误",
      502: "网关错误",
      503: "服务不可用",
      504: "网关超时",
    };

    let errMsg;

    if (err.response) {
      // 如果err.response存在，则获取状态码并查找对应的错误信息
      const resp_code = err.response.status;
      if (resp_code === 401){
        localStorage.setItem('token', '');
        window.location.reload();
      }
      errMsg = errMap[resp_code] || "接口返回了未知错误"; // 处理未映射的状态码
    } else {
      // 处理网络错误或其他异常
      errMsg = "获取返回码异常，请检查接口或网络";
    }

    // 返回拒绝的Promise，包含错误信息
    return Promise.reject(errMsg);
  }
);

export default req;
