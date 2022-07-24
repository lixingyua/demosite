//React核心
//react渲染包
import React from 'react';
import ReactDOM from 'react-dom/client';
//引入跟组件
import App from './App';
//导入antd和样式文件
import 'antd/dist/antd.min.css'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //影响执行时间
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
