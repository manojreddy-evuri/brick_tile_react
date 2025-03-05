import React from "react";
import "../App.css";

const ProductCard = ({ imgUrl, title, description }) => {
    return (
        <div className="product">
            <img src={imgUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProductCard;