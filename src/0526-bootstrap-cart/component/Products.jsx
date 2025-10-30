import { useContext } from 'react';
import productData from "../data/productData.jsx"
import { CartContext } from '../store.jsx';

export default function Products() {
    const [state, dispatch] = useContext(CartContext);

    return (
        <>
            {/* 內層格線 */}
            <div className="row row-cols-3 g-3">
                {productData.map((item) => {
                    return (
                        <div className="col" key={item.id}>
                            <div className="card">
                                <img src={item.img} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <h6 className="card-title">
                                        {item.title}
                                        <span className="float-end">NT$ {item.price}</span>
                                    </h6>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary w-100"
                                        onClick={(e) => {
                                            dispatch({
                                                type: 'ADD_TO_CART', //環境變數命名法
                                                payload: {
                                                    ...item,
                                                    quantity: 1,
                                                }
                                            })
                                        }}
                                    >加入購物車</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}