import { useState } from 'react'
import p1 from './assets/images/p1.jpg'
import p2 from './assets/images/p2.jpg'
function App() {
    // 圖片陣列
    const arrPhotos = [p1, p2];
    // 目前圖片的state 預設為第一張
    const [currentImg, setCurrntImg] = useState();
    
    return (
        <>
            <div className="main">
                {/* 縮圖區 */}
                <div>
                    {/* <img src={p1} alt="" width="100" />
                    <img src={p2} alt="" width="100" /> */}
                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img
                                    key={index} src={photo} alt='' width={100}
                                    // 當滑鼠碰到時 取得目前圖片索引編號 透過setCurrentImg方法更改
                                    onMouseOver={e => setCurrntImg(index)}
                                    // 變更滑鼠形狀為手型
                                    style={{ cursor: "pointer" }}
                                />
                            )
                        })
                    }

                    {/*放大圖區 */}
                    <img src={arrPhotos[currentImg]} alt="" width="300" />
                </div>
            </div>
        </>
    )
}
export default App
