import React from 'react'
import NavBar from './components/NavBar'
import "./App.css";
import ItemListContainer from './components/ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/>
    </div>
  )
}

export default App