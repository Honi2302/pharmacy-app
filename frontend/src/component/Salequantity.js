import React, { useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const Salequantity = () => {
    const params = useParams()
  const [quantitySold, setQuantitySold] = useState("")
  const navigate = useNavigate()

  const soldProduct = async()=>{
    let result = await fetch(`http://localhost:5000/api/sell/${params.id}`, 
            {
                  method:"POST",
                  body: JSON.stringify({quantitySold}), 
                  headers:{
                        'Content-Type':'application/json; charset=utf-8'
                  }
            })
            result = await result.json()
            if(result){
                  alert("Product marked as sold")
                  navigate('/')
            }
  }
  

  console.log(params.id, quantitySold)
    return (
    <div className="addProduct">
      <input type="number"
      placeholder='Enter Sold Quantity'
      className="inputbox"
      onChange={(e)=>setQuantitySold(e.target.value)}
      value={quantitySold}
      />

<button onClick={soldProduct} className="sign-up-button">Update Product</button>
    </div>
  )
}

export default Salequantity
