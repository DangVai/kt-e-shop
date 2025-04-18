import React, { useState, useEffect } from "react";
import ProductRow from "./components/ProductRow";

function DataFetch() {
    const [apiUrl, setApiUrl] = useState("https://656ca88ee1e03bfd572e9c16.mockapi.io/products"); // URL mặc định
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //States
        async function fetchData() {
            try {
                setLoading(true); // Bắt đầu tải
                setError(null); // Xóa lỗi cũ
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Kết thúc tải
            }
        }
        fetchData();
    }, [apiUrl]); // Gọi lại khi apiUrl thay đổi

    const handleApiChange = (event) => {
        setApiUrl(event.target.value); // Cập nhật URL API từ input
    };

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error loading products: {error}</div>;
    }

    return (
        <div>
            {/* <div>
                <label htmlFor="apiUrl">API URL: </label>
                <input
                    id="apiUrl"
                    type="text"
                    value={apiUrl}
                    onChange={handleApiChange} // Thay đổi URL API
                    style={{ width: "400px", marginRight: "10px" }}
                />
            </div> */}
            <ProductRow products={products} />
        </div>
    );
}

export default DataFetch;