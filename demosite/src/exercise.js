//const name = '���'
//const getage = () => {
//    return 18;
//}
//�б���Ⱦ------------------------
//map�ظ���Ⱦ
//������Ⱦ------------------------
//const list = [
//    { id: 8, name: '����' },
//    { id: 9, name: '����' },
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


//�����߼��ж�
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
//�������

import * as React from "react";

//����
function Hello() {
    return <div>hello</div>
}

//��Ⱦ
//�����
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
