// 展示列表
// function Todo(props){
//     return(
//         <div className="todo">
//             <p>{props.todo}</p>
//         </div>
//     )
// }

function Todo({todo}){
    return(
        <div className="todo">
            <p>{todo.content}</p>
        </div>
    )
}

export default Todo