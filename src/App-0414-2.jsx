function Component() {
    return <h1>React</h1>
}
// 可用於篩選功能

function App() {
    //陣列內可以是屬性 方法 元件
    //同一個陣列中，key屬性的直不可重複

    // 建立陣列1
    const listItem = [
        <Component key="0" />,
        <Component key="1" />
    ]

    // 建立陣列2
    const listBooks = [
        { bookName: 'HTML', id: 'book1' },
        { bookName: 'CSS', id: 'book2' },
        { bookName: 'JavaScript', id: 'book3' },
        { bookName: 'React', id: 'book4' },
    ]

    //過濾出陣列中,除了css的書本 
    const filterBooks = listBooks.filter((book) => {
        // 如果不是css就保留
        if (book.bookName != 'CSS') {
            return true
        }
    })

    return (
        <>
            {/* 使用陣列方法1 */}
            {listItem}
            <hr />
            {/* 使用陣列方法2:map方法 */}
            {
                listBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
            <hr />
            {/* 顯示filter()過濾後的陣列資料 */}
            {
                filterBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}
                    </div>
                })
            }
        </>
    )
}
// 
export default App