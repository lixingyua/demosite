//React����
//react��Ⱦ��
import React from 'react';
import ReactDOM from 'react-dom/client';
//��������
import App from './App';
//����antd����ʽ�ļ�
import 'antd/dist/antd.min.css'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Ӱ��ִ��ʱ��
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
