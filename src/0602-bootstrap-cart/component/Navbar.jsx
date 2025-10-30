import { useContext } from "react"
import { CartContext } from "../store"

export default function Navbar() {
    const [state] = useContext(CartContext);
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="btn btn-outline-success position-relative" type="button">
                    購物車
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                        {state.cartList.length}
                    </span>
                </button>
            </div>
        </nav>
    )
}