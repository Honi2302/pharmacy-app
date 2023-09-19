import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {

    const [Quantity, setQuantity] = useState("")
    const [medicineName, setMedicineName] = useState("")
    const [saltName, setSaltName] = useState("")
    const [MG, setMG] = useState("")
    const [category, setCategory] = useState("")
    const [ExpireDate, setExpireDate] = useState("")
    const [MRP, setMRP] = useState("")
    const [Rate, setrate] = useState("")
    const [error, setError] = useState(false)

    const AddProductfunction = async()=>{

      if(!Quantity || !medicineName || !saltName || !MG || !category || !ExpireDate || !MRP || !Rate){
            setError(true)
            return false
      }

      const url = "http://localhost:5000/addstock"
      const response = await axios.post(url, {
            Quantity, medicineName, saltName, MG, category, ExpireDate, MRP, Rate
      })
      console.log(response)
      if (response) { 
            alert("Product added")
      }
        }

  return (
    <div className="addProduct">
      <h1>Add Product!</h1>

<input type="text"
      placeholder='Enter Medicine Name'
      className="inputbox"
      onChange={(e)=>setMedicineName(e.target.value)}
      value={medicineName}
      />
{error && !medicineName && <span className='invalid-input'>Enter Valid Product</span>}

<input type="text"
      placeholder='Enter Salt Name'
      className="inputbox"
      onChange={(e)=>setSaltName(e.target.value)}
      value={saltName}
      />
{error && !saltName && <span className='invalid-input'>Enter Valid Model</span>}

<input type="text"
      placeholder='Enter dosage in mg'
      className="inputbox"
      onChange={(e)=>setMG(e.target.value)}
      value={MG}
      />
{error && !MG && <span className='invalid-input'>Enter Valid Price</span>}

<input type="text"
      placeholder='Enter category whether it is cap, inj or tab'
      className="inputbox"
      onChange={(e)=>setCategory(e.target.value)}
      value={category}
      />{error && !category && <span className='invalid-input'>Enter Valid Product Type</span>}

<input type="text"
      placeholder='Enter Expire Date'
      className="inputbox"
      onChange={(e)=>setExpireDate(e.target.value)}
      value={ExpireDate}
      />{error && !ExpireDate && <span className='invalid-input'>Enter Valid Product Type</span>}      

<input type="text"
method="POST"
      placeholder='Enter Quantity in stock'
      className="inputbox"
      onChange={(e)=>setQuantity(e.target.value)}
      value={Quantity}
      />
{error && !Quantity && <span className='invalid-input'>Enter Valid Name</span>}

<input type="text"
      placeholder='Enter MRP'
      className="inputbox"
      onChange={(e)=>setMRP(e.target.value)}
      value={MRP}
      />{error && !MRP && <span className='invalid-input'>Enter Valid Product Type</span>} 

<input type="text"
      placeholder='Enter Rate of purchase'
      className="inputbox"
      onChange={(e)=>setrate(e.target.value)}
      value={Rate}
      />{error && !Rate && <span className='invalid-input'>Enter Valid Product Type</span>} 


<div> <button onClick={AddProductfunction} className="sign-up-button">Add Product</button></div>
     
    </div>
  )
}

export default AddProduct
