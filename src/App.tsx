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

	const scrollToProducts = () => {
		// If we're not on the products view, navigate there first
		if (navigation.view !== "products") {
			setNavigation({ view: "products" })
			// Wait for the component to render before scrolling
			setTimeout(() => {
				const productListElement = document.getElementById("product-list")
				if (productListElement) {
					productListElement.scrollIntoView({
						behavior: "smooth",
						block: "start"
					})
				}
			}, 100)
		} else {
			// If we're already on products view, just scroll
			const productListElement = document.getElementById("product-list")
			if (productListElement) {
				productListElement.scrollIntoView({
					behavior: "smooth",
					block: "start"
				})
			}
		}
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
				<Header onNavigateToCart={() => navigateTo("cart")} onNavigateToProducts={scrollToProducts} />
				<main className="main-content">{renderCurrentView()}</main>
				<Footer />
			</div>
		</CartProvider>
	)
}
