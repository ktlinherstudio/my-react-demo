import { useReducer } from "react"
import "./App.css"
import Cart from "./component/Cart"
import Navbar from "./component/Navbar"
import Products from "./component/Products"
import { CartContext } from "./store"

export default function App() {
    const cartReducer = useReducer(
        (state, action) => {
            const cartList = [...state.cartList];
            const index = cartList.findIndex((item) => {
                return item.id === action.payload.id;
            });
            switch (action.type) {
                case 'ADD_TO_CART':
                    if (index === -1) {
                        cartList.push(action.payload);
                    } else if (cartList[index].quantity + action.payload.quantity > 10) {
                        alert('每個餐點最多只能點十份');
                        cartList[index].quantity = 10;
                    } else {
                        cartList[index].quantity += action.payload.quantity;
                    }
                    return {
                        ...state,
                        cartList,
                        total: calculateTotalPrice(cartList),
                    };

                case 'CHANGE_CART_QUANTITY': {
                    const index = cartList.findIndex(i => i.id === action.payload.id);
                    if (index === -1) return state;

                    const nextQty = Math.max(1, Math.min(Number(action.payload.quantity), 10));
                    cartList[index] = { ...cartList[index], quantity: nextQty };

                    return {
                        ...state,
                        cartList,
                        total: calculateTotalPrice(cartList),
                    };
                }


                case 'REMOVE_CART_ITEM':
                    cartList.splice(index, 1);
                    return {
                        ...state,
                        cartList,
                        total: calculateTotalPrice(cartList),
                    };

                default:
                    return state;
            }
        },
        {
            cartList: [],
        },
    );

    return (
        <CartContext.Provider value={cartReducer}>
            {/* 導覽列 navbar */}
            <Navbar />

            <div className="container mt-4">
                {/* 外層格線 */}
                <div className="row">
                    {/* 產品列表區(左) 卡片元件 */}
                    <div className="col-md-7">
                        <Products />
                    </div>
                    {/* 購物清單區(右) 表格*/}
                    <div className="col-md-5">
                        <Cart />
                    </div>
                </div>
            </div>
        </CartContext.Provider>
    );
}

function calculateTotalPrice(cartList) {
    return cartList
        .map((item) => item.quantity * item.price)
        .reduce((a, b) => a + b, 0);

}