export default function App(){
    return(
        <>
        <h1>本地端存取資料-local storage</h1>
        <button onClick={()=>{
            window.localStorage.setItem('book1','html5');
             window.localStorage.setItem('book2','css');
              window.localStorage.setItem('book3','js');
        }}>寫入（新增/修改）資料</button>
        <button onClick={()=>{
            // 已知key的寫法
            //console.log(window.localStorage.getItem('book2'))
            // 未知 請取全部資料
            for(var i=0; i<window.localStorage.length;i++){
                var key= window.localStorage.key(i);
                console.log(window.localStorage.getItem(key));
            }
        }}>讀取資料</button>
        <button onClick={()=>{
            window.localStorage.removeItem('book2');
        }}>刪除資料</button>
        <button onClick={()=>{
            window.localStorage.clear();
        }}>全部刪除</button>

        </>
    )
}