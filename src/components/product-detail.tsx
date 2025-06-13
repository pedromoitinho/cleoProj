"use client"

import type React from "react"
import KitRosa from "../assets/KitRosa.webp"
import KitRosaClaro from "../assets/KitRosaClaro.webp"
import KitVerde from "../assets/KitVerde.webp"
import { useCart, type Product } from "../context/cart-context"
import "../styles/product-detail.css"

const products: Product[] = [
	{
		id: 1,
		name: "Kit Verde",
		price: 50,
		image: KitVerde,
		description: "Nosso melhor kit de corrida para você que gosta de tons esverdeados.",
		category: "Fitness",
		rating: 4.8,
		reviews: 124,
		features: ["Tecido Fino", "Ultra-Confortável"],
	},
	{
		id: 2,
		name: "Kit Rosa",
		price: 45.0,
		image: KitRosa,
		description: "Nosso melhor kit de corrida para você que gosta de tons de rosa escuro.",
		category: "Fitness",
		rating: 4.6,
		reviews: 89,
		features: ["Tecido Fino", "Ultra-Confortável"],
	},
	{
		id: 3,
		name: "Kit  Rosa Claro",
		price: 65.5,
		image: KitRosaClaro,
		description: "Nosso melhor kit de corrida para você que gosta de tons de rosa claro.",
		category: "Fitness",
		rating: 4.9,
		reviews: 156,
		features: ["Tecido Fino", "Ultra-Confortável"],
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
        <h2>Produto não Encontrado</h2>
        <button onClick={onNavigateBack} className="back-link">
          ← Voltar aos Produtos
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  return (
    <div className="product-detail-container">
      <button onClick={onNavigateBack} className="back-link">
        ← Voltar aos Produtos
      </button>

      <div className="product-detail">
        <div className="product-image-section">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image-large" />
        </div>

        <div className="product-info-section">
          <div className="product-category">{product.category}</div>
          <h1 className="product-title">{product.name}</h1>


          <div className="product-price-large">R${product.price.toFixed(2)}</div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          {product.features && (
            <div className="product-features">
              <h3>Qualidades:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="add-to-cart-btn-large" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
