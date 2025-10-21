import { useRef, useState } from "react";

export default function App() {
    // const[value,setValue]=useState('');
    // 建立一個useRef的變數
    const inputRef = useRef(null);

    console.log('App 渲染...');

    const submitHandler = () => {
        // console.log(value);
        // 傳回被綁定的useRef的物件
        // console.log(inputRef);
        //查看值
        // console.log(inputRef.current.value);
        //查類型
        // console.log(inputRef.current.type);
        //動態改變類行為 password
        inputRef.current.type = "password";
        //查類型
        // console.log(inputRef.current.type);
    }
    const submitHandler2 = () => {
        // 動態改變類型為text
        inputRef.current.type = "text";
    }


    return (
        <>
            {/* <input type="text" onChange={(e)=>setValue(e.target.value)}/> */}
            <input type="text" ref={inputRef} />
            <button onClick={submitHandler}>關閉密碼</button>
            <button onClick={submitHandler2}>查看密碼</button>
        </>
    )
}

    // Ref 到位：更乾淨的顯示 / 隱藏密碼寫法
// import { useRef, useState } from "react";


// // 版本 A：單一切換按鈕（建議）
// export default function App() {
//     const inputRef = useRef(null);
//     const [show, setShow] = useState(false);


//     // 每次 show 改變時，同步 DOM 屬性（保留使用 ref 的練習）
//     if (inputRef.current) {
//         inputRef.current.type = show ? "text" : "password";
//     }


//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//             <div className="w-full max-w-sm space-y-3">
//                 <label className="block text-sm font-medium text-gray-700">密碼</label>
//                 <div className="relative">
//                     <input
//                         ref={inputRef}
//                         type="password"
//                         className="w-full rounded-xl border border-gray-300 px-4 py-2 pr-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         placeholder="輸入密碼"
//                     />
//                     <button
//                         type="button"
//                         className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg border px-3 py-1 text-sm hover:bg-gray-100"
//                         onClick={() => setShow((s) => !s)}
//                         aria-pressed={show}
//                     >
//                         {show ? "隱藏" : "顯示"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }