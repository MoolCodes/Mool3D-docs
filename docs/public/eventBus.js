// 建立中转站，实现组件与组件之间的传值
import mitt from "mitt";
const bus = mitt();
export default bus;
