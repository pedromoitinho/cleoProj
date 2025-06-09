"use client"

import type React from "react"
import KitRosa from "../assets/KitRosa.jpeg"
import KitRosaClaro from "../assets/KitRosaClaro.jpeg"
import KitVerde from "../assets/KitVerde.jpeg"
import { useCart, type Product } from "../context/cart-context"
import "../styles/product-list.css"

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
		features: ["Rose gold plated", "Adjustable chain length", "Hypoallergenic", "Gift box included"],
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
		features: ["100% pure silk", "Hand-rolled edges", "Versatile styling", "Dry clean only"],
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
		features: ["Austrian crystals", "Sterling silver posts", "Rose-shaped design", "Secure backing"],
	},
	
]

interface ProductListProps {
	onNavigateToProduct: (id: number) => void
}

const ProductList: React.FC<ProductListProps> = ({ onNavigateToProduct }) => {
	const { dispatch } = useCart()

	const handleAddToCart = (product: Product, e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		dispatch({ type: "ADD_TO_CART", payload: product })
	}

	return (
		<div id="product-list" className="product-list-container">
			<div className="hero-section">
				<h2>Descubra Elegância</h2>
				<p>Coleções Incriveís de Roupas</p>
			</div>

			<div className="products-grid">
				{products.map((product) => (
					<div key={product.id} className="product-card" onClick={() => onNavigateToProduct(product.id)}>
						<div className="product-image">
							<img src={product.image || "/placeholder.svg"} alt={product.name} />
							<div className="product-overlay">
								<button className="add-to-cart-btn" onClick={(e) => handleAddToCart(product, e)}>
									Adicionar ao Carrinho
								</button>
							</div>
						</div>

						<div className="product-info">
							<h3 className="product-name">{product.name}</h3>
							<p className="product-description">{product.description}</p>
							<p className="product-price">R${product.price.toFixed(2)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductList
