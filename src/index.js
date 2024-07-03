// 项目入口
// 必要的核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 导入项目根组件
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

