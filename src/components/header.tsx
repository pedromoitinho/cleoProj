"use client"

import type React from "react"
import { useCart } from "../context/cart-context"
import "../styles/header.css"

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
          <h1>CleoFit</h1>
        </button>

        <nav className="nav">
          <button onClick={onNavigateToProducts} className="nav-link">
            Produtos
          </button>
          <button onClick={onNavigateToCart} className="nav-link cart-link">
            Carrinho
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
