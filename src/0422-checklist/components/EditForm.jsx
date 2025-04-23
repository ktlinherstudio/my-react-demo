import { useState } from "react"
import Todo from "./Todo";
function EditForm({ todo, editTodo }) {
    // 建立input變數
    // const常數
    const [content, setContent] = useState(todo.content);// 管理輸入框的內容
    const handleSubmit = (e) => {
        // 取消網頁預設行為,不然會抓不到資料
        e.preventDefault();
        // 增加todo內容
        editTodo(todo.id,content);
        // // 清空input輸入列的資料
        // setContent('');
    }
    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="請輸入待辦事項"
                value={content}
                // 雙向綁定
                // 當ui發生內容異動時 state也會跟著改變
                // 當state發生改變時 ui也會跟著動
                onChange={(e) => {
                    setContent(e.target.value)
                }} />
            <button type="submit">完成</button>
        </form>
    )
}

export default EditForm