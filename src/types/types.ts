export type Product = {
    id: string;
    type: string;
    title: string;
    description: string;
    price: number;
    img1: string;
    img2: string;
  }

  export type CartContextProps = {
    product:Product;
    addToCart: (product:Product) => void
    setCart: Product[]
    removeFromCart: (productId: number) => void
    clearCart: () => void
}