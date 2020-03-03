import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './appRouter';
import NestRouter from './nestRouter';
import Example1 from './hooksExample/useStateHook';
import Example2 from './hooksExample/useEffectHook';
import Example3 from './hooksExample/useContextHook';
import ReducerDemo from './hooksExample/useReducerHook';
import Combine from './hooksExample/hookcase/conbained';
import Memo from './hooksExample/useMemoHook';
import Ref from './hooksExample/useRefHook';
import CallBack from './hooksExample/useCallbackHook';
// ReactDOM.render(<AppRouter />, document.getElementById('root'));


// 嵌套路由的演示 文件（components 和 nestRouter）
// ReactDOM.render(<NestRouter />, document.getElementById('root'));

// hooks的useSate练习
// ReactDOM.render(<Example1 />, document.getElementById('root'));

// hooks的useEffect练习
// ReactDOM.render(<Example2 />, document.getElementById('root'));

// hooks的useContext的练习
// ReactDOM.render(<Example3 />, document.getElementById('root'));

// // hooks的useReducer的练习
// ReactDOM.render(<ReducerDemo />, document.getElementById('root'));

// hooks
// ReactDOM.render(<Combine />, document.getElementById('root'));

// hooks的useMemo的练习
// ReactDOM.render(<Memo />, document.getElementById('root'));

// hooks的useMemo的练习
// ReactDOM.render(<Ref />, document.getElementById('root'));

// hooks的usecallback的练习
ReactDOM.render(<CallBack />, document.getElementById('root'));
