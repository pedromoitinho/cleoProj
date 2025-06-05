"use client"

import { useState } from "react"
import "./App.css"
import Cart from "./components/cart"
import Footer from "./components/footer"
import Header from "./components/header"
import ProductDetail from "./components/product-detail"
import ProductList from "./components/product-list"
import { CartProvider } from "./context/cart-context"

export type NavigationState = {
  view: "products" | "product-detail" | "cart"
  productId?: number
}

export default function App() {
  const [navigation, setNavigation] = useState<NavigationState>({ view: "products" })

  const navigateTo = (view: NavigationState["view"], productId?: number) => {
    setNavigation({ view, productId })
  }

  const renderCurrentView = () => {
    switch (navigation.view) {
      case "products":
        return <ProductList onNavigateToProduct={(id) => navigateTo("product-detail", id)} />
      case "product-detail":
        return <ProductDetail productId={navigation.productId} onNavigateBack={() => navigateTo("products")} />
      case "cart":
        return <Cart onNavigateBack={() => navigateTo("products")} />
      default:
        return <ProductList onNavigateToProduct={(id) => navigateTo("product-detail", id)} />
    }
  }

  return (
    <CartProvider>
      <div className="app">
        <Header onNavigateToCart={() => navigateTo("cart")} onNavigateToProducts={() => navigateTo("products")} />
        <main className="main-content">{renderCurrentView()}</main>
        <Footer />
      </div>
    </CartProvider>
  )
}
