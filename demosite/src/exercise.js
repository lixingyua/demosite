//const name = '你好'
//const getage = () => {
//    return 18;
//}
//列表渲染------------------------
//map重复渲染
//条件渲染------------------------
//const list = [
//    { id: 8, name: '张三' },
//    { id: 9, name: '李四' },
//];


//function Exercise() {
//    return (
//        <div className="Exercise">
//            <ul>
//                {list.map(list => <li key={list.id}>{list.name}</li>)}
//            </ul>
//        </div>
//    )
//}

//export default Exercise;


//复杂逻辑判断
//const getTag = (type) => {
//    if (type == 1) {
//        return <h1>this is h1</h1>
//    }
//    if (type == 2) {
//        return <h2>this is h2</h2>
//    }
//}

//function App() {
//    return (
//        <div className="App">
//            {getTag(1)}
//        </div>
//    )
//}

//export default App;
//函数组件

import * as React from "react";

//创建
function Hello() {
    return <div>hello</div>
}

//渲染
//类组件
class HelloComponent extends React.Component {
    render() {
        return <div>this is a class</div>
    }
}
function App() {
    return (
        <div className="App">
            <HelloComponent></HelloComponent>
        </div>
    )
}

export default App;
