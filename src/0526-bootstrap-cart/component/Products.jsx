import productData from "../data/productData.jsx"
export default function Products() {
    return (
        <>
            {/* 內層格線 */}
            <div className="row row-cols-3 g-3">
                {
                    productData.map((product) => {
                        return (
                            <div className="col" key={product.id}>
                                <div className="card">
                                    <img src={product.img} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            {product.title}
                                            <span className="float-end">NT$ {product.price}</span>
                                        </h6>
                                        <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}