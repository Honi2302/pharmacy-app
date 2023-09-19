import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {

    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        showProducts()
    },[]) 

    const showProducts = async()=>{
        let result = await fetch("http://localhost:5000/stock")
        let responce = await result.json()
        setProduct(responce)
        console.log(responce)
    }

    const deleteProduct = async(id)=>{
      let result = await fetch(`http://localhost:5000/delete/${id}`,{
        method:"Delete"
      })
      let responce = await result.json()
      console.log(responce)
      if(Response){
        alert("Record Deleted")
        showProducts()
      }
    }


    const handleSearch = async (e)=>{
      let key = e.target.value
      if(key)
          {
            let result = await fetch(`http://localhost:5000/search/${key}`)
            let result1 = await result.json()
            setProduct(result1)
          }
      else{
            showProducts()
          }
      
    }
  
    return (
    <div className='product-list'>
      <h2>This is the list of products</h2>
      <input onChange={handleSearch} className="search-bar" type="text" placeholder='Search for Medicine Name, Salt Name'/>
      

      <table class="table table-success table-striped-columns">
      <thead>
    <tr>
      <th scope="col">S. No.</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Salt Name</th>
      <th scope="col">Dosage</th>
      <th scope="col">Category</th>
      <th scope="col">Expire Date</th>
      <th scope="col">Quantity In-Stock</th>
      <th scope="col">MRP</th>
      <th scope="col">Rate</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
       {
        product.length>0? product.map((item, index)=>
      <>
      <tbody> 
      <tr>
      <th scope="row">{index+1}</th>
      <td>{item.medicineName}</td>
      <td>{item.saltName}</td>
      <td>{item.MG}</td>
      <td>{item.category}</td>
      <td>{item.ExpireDate}</td>
      <td>{item.Quantity}</td>
      <td>Rs. {item.MRP}/-</td>
      <td>Rs. {item.Rate}/-</td>
      <td><button  className="delete-button" onClick={()=>deleteProduct(item._id)}>Delete</button>
         <Link to={`/update/${item._id}`}><button  className="delete-button">Update</button></Link> 
          <Link to={`/api/sell/${item._id}`}><button className="delete-button" >Sold</button></Link></td>
      </tr>
      </tbody>
      </>
        ) :
        <h1>No Product Found</h1>
      }
      </table>
    </div>
  )
}

export default Product
