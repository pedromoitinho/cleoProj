"use client"

import type React from "react"
import { useCart } from "../context/cart-context"
import "../styles/cart.css"

interface CartProps {
  onNavigateBack: () => void
}

const Cart: React.FC<CartProps> = ({ onNavigateBack }) => {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  if (state.items.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Seu Carrinho está Vazio</h2>
          <p>Adicione alguns itens para começar</p>
          <button onClick={onNavigateBack} className="continue-shopping-btn">
            Continuar Navegando
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Carrinho</h2>
        <button className="clear-cart-btn" onClick={clearCart}>
          Limpar Carrinho
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {state.items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="cart-item-image" />

              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">R${item.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>

                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remover
                </button>
              </div>

              <div className="cart-item-total">R${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Valores:</h3>
            <div className="summary-line">
              <span>Total:</span>
              <span>R${state.total.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Frete:</span>
              <span>Grátis</span>
            </div>
            <div className="summary-line total">
              <span>Total:</span>
              <span>R${state.total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Prosseguir para a compra</button>
          </div>
        </div>
      </div>

      <button onClick={onNavigateBack} className="continue-shopping-link">
        ← Continuar Comprando
      </button>
    </div>
  )
}

export default Cart
