import React, {useState} from 'react'
import  axios  from 'axios'

const AddDemand = () => {
    const [medicineName, setMedicineName] = useState("")
    const [category, setCategory] = useState("")
    const [discription, setDiscription] = useState("")
    const [error, setError] = useState(false)

  

const AddProductfunction = async()=>{
    if(!discription || !medicineName || !category){
        setError(true)
        return false
  }

  const url = "https://pharmacy-app-backend.vercel.app/addDemand"
      const response = await axios.post(url, {
            medicineName,category, discription
      })
      console.log(response)
      if (response) { 
            alert("Demand added")
      }
}



  return (
    
       <div className="addProduct">
      <h1>Add Demand!</h1>

            <div className="container-sm my-container">

<input type="text"
      placeholder='Enter Medicine Name'
      className="inputbox"
      onChange={(e)=>setMedicineName(e.target.value)}
      value={medicineName}
      />
{error && !medicineName && <span className='invalid-input'>Enter Valid Medicine Name</span>}

<input type="text"
      placeholder='Enter catergory Name'
      className="inputbox"
      onChange={(e)=>setCategory(e.target.value)}
      value={category}
      />
{error && !category && <span className='invalid-input'>Enter Valid Category</span>}

<input type="text"
      placeholder='Enter Discription'
      className="inputbox"
      onChange={(e)=>setDiscription(e.target.value)}
      value={discription}
      />
{error && !discription && <span className='invalid-input'>Enter Valid Discription</span>}

<div> <button onClick={AddProductfunction} className="sign-up-button">Add Demand</button></div>
</div>
</div>
  )
}

export default AddDemand
