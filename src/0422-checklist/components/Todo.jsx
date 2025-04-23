import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditForm from "./EditForm";
// 展示列表
// function Todo(props){
//     return(
//         <div className="todo">
//             <p>{props.todo}</p>
//         </div>
//     )
// }


// 將props物件解構{元件屬性}
function Todo({ todo, delTodo, toggleCompleted, toggleIsEdit,editTodo }) {
    return (
        todo.isEdit ? <EditForm todo={todo} editTodo={editTodo}/> :
            // 使用三元運算子
            // 條件式?成立:不成立
            <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                <p onClick={() => { toggleCompleted(todo.id) }}>
                    {todo.content}
                </p>

                <div>
                    {/* 修改 */}
                    <AiFillEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer' }} />
                    {/* 刪除 */}
                    <AiFillDelete
                        onClick={() => delTodo(todo.id)}
                        style={{ cursor: 'pointer', marginLeft: '5px' }} />
                </div>

            </div>
    )
}

export default Todo