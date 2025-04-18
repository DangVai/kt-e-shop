// DataFetcher.js
export async function fetchProducts() {
    try {
        const response = await fetch("https://656ca88ee1e03bfd572e9c16.mockapi.io/products");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
        return [];
    }
}
export async function fetchProductDetails(productId) {
    try {
        const response = await fetch(`https://656ca88ee1e03bfd572e9c16.mockapi.io/products/${productId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Lỗi khi fetch chi tiết sản phẩm:", error);
        return null;
    }
}