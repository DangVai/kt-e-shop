import React from "react";

function Square(props) {
    console.log("Width:", props.width, "Background Color:", props.bgColor); // Kiểm tra giá trị props

    return (
        <div
            style={{
                width: props.width, // Kích thước chiều rộng
                height: props.width, // Kích thước chiều cao
                backgroundColor: props.bgColor, // Màu nền
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
            }}
        >
            ạds
        </div>
    );
}

export default Square;