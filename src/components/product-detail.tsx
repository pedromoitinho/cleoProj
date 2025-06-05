"use client"

import type React from "react"
import { useCart, type Product } from "../context/cart-context"
import "../styles/product-detail.css"

const products: Product[] = [
  {
    id: 1,
    name: "Elegant Rose Gold Necklace",
    price: 89.99,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "A stunning rose gold necklace with delicate chain links, perfect for any occasion. This exquisite piece features a timeless design that complements both casual and formal attire. Crafted from high-quality materials, it's designed to last and maintain its beautiful luster over time.",
    category: "Jewelry",
    rating: 4.8,
    reviews: 124,
    features: ["Rose gold plated", "Adjustable chain length", "Hypoallergenic", "Gift box included"],
  },
  {
    id: 2,
    name: "Silk Blush Scarf",
    price: 45.0,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Luxurious silk scarf in a beautiful blush pink shade, ideal for adding elegance to any outfit. Made from 100% pure silk, this scarf offers incredible softness and a lustrous finish that catches the light beautifully.",
    category: "Accessories",
    rating: 4.6,
    reviews: 89,
    features: ["100% pure silk", "Hand-rolled edges", "Versatile styling", "Dry clean only"],
  },
  {
    id: 3,
    name: "Crystal Rose Earrings",
    price: 65.5,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Delicate crystal earrings shaped like roses, crafted with precision and care. These stunning earrings feature sparkling crystals that catch the light from every angle, creating a mesmerizing effect.",
    category: "Jewelry",
    rating: 4.9,
    reviews: 156,
    features: ["Austrian crystals", "Sterling silver posts", "Rose-shaped design", "Secure backing"],
  },
  {
    id: 4,
    name: "Velvet Pink Handbag",
    price: 120.0,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Sophisticated velvet handbag in dusty pink, featuring gold hardware and spacious interior. This elegant bag combines style with functionality, offering multiple compartments for organization.",
    category: "Bags",
    rating: 4.7,
    reviews: 203,
    features: ["Premium velvet material", "Gold-tone hardware", "Multiple compartments", "Adjustable strap"],
  },
  {
    id: 5,
    name: "Pearl Drop Bracelet",
    price: 75.25,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Elegant bracelet featuring freshwater pearls with rose gold accents. Each pearl is carefully selected for its luster and quality, creating a piece that's both timeless and contemporary.",
    category: "Jewelry",
    rating: 4.8,
    reviews: 98,
    features: ["Freshwater pearls", "Rose gold accents", "Adjustable length", "Secure clasp"],
  },
  {
    id: 6,
    name: "Cashmere Pink Sweater",
    price: 155.0,
    image: "/placeholder.svg?height=500&width=500",
    description:
      "Ultra-soft cashmere sweater in powder pink, perfect for cozy elegance. This luxurious sweater is made from the finest cashmere fibers, offering unparalleled softness and warmth.",
    category: "Clothing",
    rating: 4.9,
    reviews: 167,
    features: ["100% cashmere", "Powder pink color", "Relaxed fit", "Hand wash recommended"],
  },
]

interface ProductDetailProps {
  productId?: number
  onNavigateBack: () => void
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigateBack }) => {
  const { dispatch } = useCart()

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={onNavigateBack} className="back-link">
          ← Back to Products
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? "filled" : ""}`}>
        ★
      </span>
    ))
  }

  return (
    <div className="product-detail-container">
      <button onClick={onNavigateBack} className="back-link">
        ← Back to Products
      </button>

      <div className="product-detail">
        <div className="product-image-section">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image-large" />
        </div>

        <div className="product-info-section">
          <div className="product-category">{product.category}</div>
          <h1 className="product-title">{product.name}</h1>


          <div className="product-price-large">${product.price.toFixed(2)}</div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          {product.features && (
            <div className="product-features">
              <h3>Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="add-to-cart-btn-large" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
