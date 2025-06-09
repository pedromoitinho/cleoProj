"use client"

import type React from "react"
import { useCart, type Product } from "../context/cart-context"
import "../styles/product-list.css"
import KitVerde from "../assets/KitVerde.jpeg"
import KitRosa from "../assets/KitRosa.jpeg"
import KitRosaClaro from "../assets/KitRosaClaro.jpeg"

const products: Product[] = [
	{
		id: 1,
		name: "Elegant Rose Gold Necklace",
		price: 89.99,
		image: KitVerde,
		description: "A stunning rose gold necklace with delicate chain links, perfect for any occasion.",
		category: "Jewelry",
		rating: 4.8,
		reviews: 124,
		features: ["Rose gold plated", "Adjustable chain length", "Hypoallergenic", "Gift box included"],
	},
	{
		id: 2,
		name: "Silk Blush Scarf",
		price: 45.0,
		image: KitRosa,
		description: "Luxurious silk scarf in a beautiful blush pink shade, ideal for adding elegance to any outfit.",
		category: "Accessories",
		rating: 4.6,
		reviews: 89,
		features: ["100% pure silk", "Hand-rolled edges", "Versatile styling", "Dry clean only"],
	},
	{
		id: 3,
		name: "Crystal Rose Earrings",
		price: 65.5,
		image: KitRosaClaro,
		description: "Delicate crystal earrings shaped like roses, crafted with precision and care.",
		category: "Jewelry",
		rating: 4.9,
		reviews: 156,
		features: ["Austrian crystals", "Sterling silver posts", "Rose-shaped design", "Secure backing"],
	},
	{
		id: 4,
		name: "Velvet Pink Handbag",
		price: 120.0,
		image: "/placeholder.svg?height=300&width=300",
		description: "Sophisticated velvet handbag in dusty pink, featuring gold hardware and spacious interior.",
		category: "Bags",
		rating: 4.7,
		reviews: 203,
		features: ["Premium velvet material", "Gold-tone hardware", "Multiple compartments", "Adjustable strap"],
	},
	{
		id: 5,
		name: "Pearl Drop Bracelet",
		price: 75.25,
		image: "/placeholder.svg?height=300&width=300",
		description: "Elegant bracelet featuring freshwater pearls with rose gold accents.",
		category: "Jewelry",
		rating: 4.8,
		reviews: 98,
		features: ["Freshwater pearls", "Rose gold accents", "Adjustable length", "Secure clasp"],
	},
	{
		id: 6,
		name: "Cashmere Pink Sweater",
		price: 155.0,
		image: "/placeholder.svg?height=300&width=300",
		description: "Ultra-soft cashmere sweater in powder pink, perfect for cozy elegance.",
		category: "Clothing",
		rating: 4.9,
		reviews: 167,
		features: ["100% cashmere", "Powder pink color", "Relaxed fit", "Hand wash recommended"],
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
							<p className="product-price">${product.price.toFixed(2)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductList
