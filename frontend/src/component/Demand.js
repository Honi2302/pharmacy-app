import React, { useEffect, useState } from 'react'

const Demand = () => {
  
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        showProducts()
    },[]) 

    const showProducts = async()=>{
        let result = await fetch("http://localhost:5000/demand")
        let responce = await result.json()
        setProduct(responce)
        console.log(responce)
    }

    const deleteProduct = async(id)=>{
        let result = await fetch(`http://localhost:5000/demand/delete/${id}`,{
          method:"Delete"
        })
        let responce = await result.json()
        console.log(responce)
        if(Response){
          alert("Record Deleted")
          showProducts()
        }
      }
  
  
  
    return (
        <div className='product-list'>
        <h2>This is the list of Demand</h2>
        <table class="table table-success table-striped-columns">
        <thead>
      <tr>
        <th scope="col">S. No.</th>
        <th scope="col">Medicine Name</th>
        <th scope="col">Category</th>
        <th scope="col">Discription</th>
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
        <td>{item.category}</td>
        <td>{item.discription}</td>
        <td><button  className="delete-button" onClick={()=>deleteProduct(item._id)}>Delete</button></td>
        </tr>
        </tbody>
        </>
          ) :
          <h1>No Demand Found</h1>
        }
        </table>
      </div>
  )
}

export default Demand
