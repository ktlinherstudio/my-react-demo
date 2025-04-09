import { useState } from "react"

// 建立元件(字首名稱大寫)
function Card({person}) {
    const{name,age}=person
    return (
        <div className="card">
            <div className="card-body">
                {/*我是Lucky Vicky*/}
                {/* 一般寫法 */}
                {/* Hi,{person.name} */}
                {/* 解構寫法 */}
                Hi,我是{name}今年{age}歲;
            </div>
        </div>
    )
}

function App() {
    // 取出特定值作為變數
    // const person = {
    //     name: '建仔',
    //     age: '10',
    // }

    // 一般寫法
    // const name=person.name;
    // const age=person.age;
    // console.log(name,age);

    // 物件解構
    // const { name, age } = person;
    // console.log(name, age);

    // useState - ReactHook
    const [person, setPerson] = useState({
        name: 'Lucky Vicky',
        age: '3',
    });

    return (
        <>
            {/* 第一個person是元件屬性 */}
            {/* 第二個person是變數(or任何形式) */}
            <Card person={person}></Card>
            <Card person={person}/>
        </>
    )
}
export default App