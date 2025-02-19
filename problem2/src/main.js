
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Alert, Badge, Card, Table, Modal, Menu, List, Drawer, Button, message, Switch, Spin, Checkbox, Progress, Timeline, Upload, Dropdown, Slider, Cascader } from 'ant-design-vue';

// Ant Design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

//Bootstrap CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
const app = createApp(App);

app.use(router);

// Ant Design Components
app.use(Antd);
app.use(Alert);
app.use(Badge);
app.use(Card);
app.use(Table);
app.use(Modal);
app.use(Menu);
app.use(List);
app.use(Drawer);
app.use(Button);
app.use(Switch);
app.use(Spin);
app.use(Checkbox);
app.use(Progress);
app.use(Timeline);
app.use(Upload);
app.use(Dropdown);
app.use(Slider);
app.use(Cascader);

app.config.globalProperties.$message = message;
app.mount('#app');
