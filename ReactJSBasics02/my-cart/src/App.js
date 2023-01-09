import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList.js'
import Footer from './Components/Footer.js'
import AddItem from './Components/AddItem'

function App() {
  const products = [
    {
      price: 99999,
      name: "iPhone X",
      quantity: 0
    },
    {
      price: 49999,
      name: "iPhone XS",
      quantity: 0
    },
    {
      price: 9999,
      name: "MicroMax XS",
      quantity: 0
    }
  ]

  let [productList, setProductList] = useState(products)
  let [totalAmount, setTotalAmount] = useState(0)

  const increamentQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }

  const decreamentQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--
      newTotalAmount -= newProductList[index].price
    }
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }

  const resetQuantity = () => {
    let newProductList =[...productList]
    newProductList.map((product) => {
      product.quantity = 0
    })
    setProductList(newProductList)
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].price * newProductList[index].quantity
    newProductList.splice(index, 1)
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }

  const addItem = (name, price) => {
    let newProductList = [...productList]
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    })
    setProductList(newProductList)
  }

  return (
    <>
    <Navbar/>
    <main className='Container mt-3'>
    <AddItem addItem={addItem}/>
      <ProductList productList={productList} increamentQuantity={increamentQuantity} decreamentQty={decreamentQuantity} removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetQuantity = {resetQuantity}/>
    </>
  );
}

export default App;
