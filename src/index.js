import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './appRouter';
import NestRouter from './nestRouter';

// ReactDOM.render(<AppRouter />, document.getElementById('root'));


// 嵌套路由的演示 文件（components 和 nestRouter）
ReactDOM.render(<NestRouter />, document.getElementById('root'));
