import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

const App = () => {
    return (
        <div>
            <header className="header">
                <h1>NVK SERVICES LIMITED Brick & Tile Manufacturing</h1>
                <p>Quality Baked Clay Products for Construction</p>
            </header>

            <section id="about" className="section">
                <h2>About Us</h2>
                <p>
                    We specialize in manufacturing high-quality bricks, tiles, and other
                    construction products made from baked clay.
                </p>
            </section>

            <section id="products" className="section">
                <h2>Our Products</h2>
                <div className="product-list">
                    <ProductCard imgUrl="/static/images/bricks-img.png" title="Bricks" description="Durable and fire-resistant bricks for strong construction." />
                    <ProductCard imgUrl="/static/images/tiles-img.png" title="Tiles" description="Beautiful clay tiles for floors, walls, and rooftops." />
                    <ProductCard imgUrl="/static/images/clayProducts-img.png" title="Other Clay Products" description="Custom clay products for construction and decoration." />
                </div>
            </section>

            <section id="gallery" className="section">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    <img src="/static/images/brickConstruction-img.png" alt="Brick Construction" />
                    <img src="/static/images/tileflooring-img.png" alt="Tile Flooring" />
                    <img src="/static/images/clayBricks-img.png" alt="Clay Bricks in a Wall" />
                </div>
            </section>

            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <p><strong>Email:</strong> maxims54jigs@icloud.com</p>
                <p><strong>Phone:</strong> +447435371832</p>
                <p><strong>Location:</strong> 28 Wilford Crescent East, Nottingham, England, NG22EA</p>
            </section>

            <footer className="footer">
                <p>&copy; 2025 Brick & Tile Manufacturing. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;