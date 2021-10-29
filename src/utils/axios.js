import axios from "axios";
import Axios from "axios";
import { ElMessage } from "element-plus";
const baseURL = "https://api.github.com";
const anxios = Axios.create({
    baseURL,
    timeout: 20000, //请求超时 20s
});
//前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use((response) => {
    /**
     * 根据实际情况对config做处理
     * 这里不做处理，直接返回
     */
    return;
}, (err) => {
    return Promise.reject(err);
});
//后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use((resopnse) => {
    /**
     * 根据实际情况对response和error做处理
     * 这里不做任何处理，直接返回
     */
    return resopnse;
}, (error) => {
    if (error.response && error.response.data) {
        const code = error.response.status;
        const msg = error.response.data.message;
        ElMessage.error(`code:${code},Messahe:${msg}`);
        console.error(`[Axios Error]`, error.response);
    }
    else {
        ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
});
export default axios;
//# sourceMappingURL=axios.js.map