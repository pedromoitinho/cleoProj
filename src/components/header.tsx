"use client"

import type React from "react"
import { useCart } from "../context/cart-context"
import "../styles/header.css"
import logoImage from "../assets/logo.jpg"

interface HeaderProps {
	onNavigateToCart: () => void
	onNavigateToProducts: () => void
}

const Header: React.FC<HeaderProps> = ({ onNavigateToCart, onNavigateToProducts }) => {
	const { state } = useCart()
	const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

	return (
		<header className="header">
			<div className="header-container">
				<button onClick={onNavigateToProducts} className="logo">
					<img src={logoImage} alt="CleoFit Logo" className="logo-image" />
				</button>

				<nav className="nav">
					<button onClick={onNavigateToProducts} className="nav-link">
						Produtos
					</button>
					<button onClick={onNavigateToCart} className="nav-link cart-link">
						🛒
						{itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
					</button>
				</nav>
			</div>
		</header>
	)
}

export default Header
