import React, { Component } from "react";
import "./ProductRow.css";

class ProductRow extends Component {
    render() {
        const { products } = this.props;

        return (
            <>
                <div className="product-row-container">
                    <h2 className="product-row-title">Sản phẩm nổi bật</h2>
                    <div className="product-row">
                        {products.map((product, index) => (
                            <div key={index} className="product">
                                <img src={product.avatar} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Giá: {product.price}₫</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default ProductRow;