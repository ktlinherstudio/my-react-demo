// 折疊qa => According
//npm install motion

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

function App() {
    //作用中的變數
    const [activeQuestion, setactiveQuestion] = useState(null);

    //faq資料
    const questions = [
        {
            id: 1,
            question: "題目1",
            ans: "答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1",
        },
        {
            id: 2,
            question: "題目2",
            ans: "答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2",
        },
        {
            id: 3,
            question: "題目3",
            ans: "答案3答案3答案3答案3答案3答案3答案3",
        }
    ]
    return (
        <>
            {/* 最外層 */}
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: "#464545ff",
            }}>
                {/* 題目層 折疊面板 */}
                <div style={{
                    width: "90%",
                    margin: "auto",
                    maxWidth: "1200px",
                    backgroundColor: "#aaa",
                    padding: "10px",
                    borderRadius: "5px"
                }}>
                    <h2 style={{
                        textAlign: "center",
                        marginBottom: "6px",
                    }}>FAQ標題</h2>
                    {
                        //帶出陣列資料
                        questions.map((q) => {
                            return (
                                <div key={q.id} style={{ marginBottom: "4px" }}>
                                    {/* QA按鈕 */}
                                    <button
                                        style={{
                                            width: "100%",
                                            textAlign: "left",
                                            border: "none",
                                            outline: "none",
                                            padding: "4px",
                                            borderRadius: "2px",
                                            backgroundColor: "#ccc",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                        onClick={() => setactiveQuestion(activeQuestion === q.id ? null : q.id)}

                                    >
                                        {/* 題目 */}
                                        {q.question}
                                        {/* icon */}
                                        {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
                                    </button>
                                    {/* 折疊扭動畫 */}
                                    <AnimatePresence>
                                        {
                                            //檢查是否作用中的題目 如果是 展開答案
                                            activeQuestion === q.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    style={{ marginTop: "5px", backgroundColor: "#333", color:"#ccc"}}
                                                >
                                                    {q.ans}
                                                </motion.div>
                                            )
                                        }
                                    </AnimatePresence>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default App