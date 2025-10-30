export default function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="btn btn-outline-success position-relative" type="button">
                    購物車
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">99</span>
                </button>
            </div>
        </nav>
    )
}