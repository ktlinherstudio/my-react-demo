import { useContext } from "react"
import { CartContext } from "../store"
import { option } from "motion/react-client";

export default function Cart() {
    const [state, dispatch] = useContext(CartContext);

    return (
        <>
            {/* 灰底色 */}
            <div className="bg-light p-3">
                <table className="table align-middle">
                    <tbody>
                        {state.cartList.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn.sm"
                                            onClick={(e) => {
                                                dispatch({
                                                    type: 'REMOVE_CART_ITEM',
                                                    payload: {
                                                        ...item,
                                                    }
                                                })
                                            }}
                                        >
                                            x
                                        </button>
                                    </td>
                                    <td>
                                        <img src={item.img} className="table-img" alt={item.title} />
                                    </td>
                                    <td>
                                        {item.title}
                                        <br />
                                        <small className="text-muted">NT$ {item.price}</small>
                                    </td>
                                    <td>
                                        <select
                                            className="form-select"
                                            value={item.quantity}
                                            onChange={(e) => {
                                                dispatch({
                                                    type: 'CHANGE_CART_QUANTITY',
                                                    payload: {
                                                        id: item.id,
                                                        quantity: parseInt(e.target.value, 10),
                                                    },
                                                });
                                            }}
                                        >
                                            {[...Array(10)].map((_, i) => (
                                                <option value={i + 1} key={i}>{i + 1}</option>
                                            ))}
                                        </select>

                                    </td>
                                    <td className="text-end">NT$ {item.quantity * item.price}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-end" colSpan={5}>總金額 NT$ {state.total || 0}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}