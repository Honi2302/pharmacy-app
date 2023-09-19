import React, { useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom'


const Update = () => {
      const [Quantity, setQuantity] = useState("")
      const [medicineName, setMedicineName] = useState("")
      const [saltName, setSaltName] = useState("")
      const [MG, setMG] = useState("")
      const [category, setCategory] = useState("")
      const [ExpireDate, setExpireDate] = useState("")
      const [MRP, setMRP] = useState("")
    const params = useParams()
    const navigate = useNavigate()
    
      useEffect(()=>{
            getDataFromAPI()
      },[])

      const getDataFromAPI = async ()=>{
           let result = await fetch(`http://localhost:5000/update/${params.id}`)
           result = await result.json()
           console.log(result)
           setQuantity(result.Quantity)
           setMedicineName(result.medicineName)
           setSaltName(result.saltName)
           setMG(result.MG)
           setCategory(result.category)
           setExpireDate(result.ExpireDate)
           setMRP(result.MRP)
      }

      const updateProduct = async ()=>{
            let result = await fetch(`http://localhost:5000/update/${params.id}`, 
            {
                  method:"PUT",
                  body: JSON.stringify({Quantity, medicineName, saltName, MG, category, ExpireDate, MRP}), 
                  headers:{
                        'Content-Type':'application/json; charset=utf-8'
                  }
            })
            result = await result.json()
            if(result.acknowledged){
                  alert("Product Updated")
                  navigate('/')
            }
      }
   

  return (
    <div className="addProduct">
      <h1>Update Product!</h1>


<input type="text"
      placeholder='Enter Medicine Name'
      className="inputbox"
      onChange={(e)=>setMedicineName(e.target.value)}
      value={medicineName}
      />


<input type="text"
      placeholder='Enter Salt Name'
      className="inputbox"
      onChange={(e)=>setSaltName(e.target.value)}
      value={saltName}
      />


<input type="text"
      placeholder='Enter dosgae in mg'
      className="inputbox"
      onChange={(e)=>setMG(e.target.value)}
      value={MG}
      />


<input type="text"
      placeholder='Enter category whether it is cap, inj or tab'
      className="inputbox"
      onChange={(e)=>setCategory(e.target.value)}
      value={category}/>

<input type="text"
      placeholder='Enter Expire Date'
      className="inputbox"
      onChange={(e)=>setExpireDate(e.target.value)}
      value={ExpireDate}/>

<input type="text"
method="POST"
      placeholder='Enter Available Quantity in Stock'
      className="inputbox"
      onChange={(e)=>setQuantity(e.target.value)}
      value={Quantity}
      />
      

<input type="text"
      placeholder='Enter MRP'
      className="inputbox"
      onChange={(e)=>setMRP(e.target.value)}
      value={MRP}/>

<button onClick={updateProduct} className="sign-up-button">Update Product</button>
     
    </div>
  )
}

export default Update
