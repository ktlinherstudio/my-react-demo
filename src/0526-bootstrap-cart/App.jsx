import "./App.css"
import Cart from "./component/Cart"
import Navbar from "./component/Navbar"
import Products from "./component/Products"

export default function App() {
    return (
        <>
            <div className="wrap">
                {/* 導覽列 navbar */}
                <Navbar/>
               
                <div className="container mt-4">
                    {/* 外層格線 */}
                    <div className="row">
                        {/* 產品列表區(左) 卡片元件 */}
                        <div className="col-md-7">
                           <Products/>
                        </div>
                        {/* 購物清單區(右) 表格*/}
                        <div className="col-md-5">
                           <Cart/>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}