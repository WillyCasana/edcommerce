import axios from "axios"
import {useEffect, useState} from "react"

function App(){

  const [products, setProducts]=useState([])


  useEffect(()=>{
    axios.get("https://dev-ecommerce.alexyslozada.com/api/v1/public/products")
        .then(data=>{
          setProducts[data.data.data]
        })
        .catch(error=>console.log(error))
  },[])

  return (
    <div>
      <h1>HOLA</h1>
      <div>
        {products.map(prod=>{
          <div>
            <div>
              <img src={prod.images[0]} alt={prod.product_name} />
              <h2>{prod.product_name}</h2>
            </div>
          </div>
        })}
      </div>
    </div>  
  )
}
export default App