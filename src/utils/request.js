import axios from "axios";

const token = localStorage.getItem("token");
const head_token = token ? `Bearer ${token}` : "";

// 创建axios实例
const req = axios.create({
  baseURL: "https://abc123.v6.rocks:10443/cgi-bin/",
  // baseURL: "http://op1.lan/cgi-bin/myscript/",
  timeout: 9000,
  headers: {
    Authorization: head_token
  }
});

// 响应拦截器
req.interceptors.response.use(
  (resp) => resp.data,
  (err) => {
    const errMap = {
      401: "未授权或过期,请重新登陆",
      403: "拒绝访问,请检查登陆账号密码",
      404: "资源未找到",
      500: "服务器端错误",
      502: "网关错误",
      503: "服务不可用",
      504: "网关超时",
    };

    let errMsg;

    if (err.response) {
      // 如果err.response存在，则获取状态码并查找对应的错误信息
      const code = err.response.status;
      errMsg = errMap[code] || "接口返回了未知错误"; // 处理未映射的状态码
    } else {
      // 处理网络错误或其他异常
      errMsg = "获取返回码异常，请检查接口或网络";
    }

    // 返回拒绝的Promise，包含错误信息
    return Promise.reject(errMsg);
  }
);

export default req;
