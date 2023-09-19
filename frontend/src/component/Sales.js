import React, { useState, useEffect } from 'react';

function Sales() {
  const [sales, setSales] = useState([]);
  const [todaySales, setTodaySales] = useState([]);
  const [last7DaysSales, setLast7DaysSales] = useState([]);

  useEffect(() => {
    showProducts();
  }, []);

  const showProducts = async () => {
    try {
      let result = await fetch("http://localhost:5000/sales");
      let response = await result.json();
      
      // Sort the products array by saleDate in descending order
      response.sort((a, b) => new Date(b.saleDate) - new Date(a.saleDate));
      
      setSales(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    // Filter today's sales data
    const today = new Date().toISOString().split('T')[0]; // Get today's date
    const todaySalesData = sales.filter((sale) => sale.saleDate.split('T')[0] === today);
    setTodaySales(todaySalesData);

    // Filter sales data for the last 7 days
    const last7Days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateFormatted = date.toISOString().split('T')[0];
      const salesDataForDate = sales.filter((sale) => sale.saleDate.split('T')[0] === dateFormatted);
      last7Days.push({
        date: dateFormatted,
        sales: salesDataForDate,
      });
    }
    setLast7DaysSales(last7Days);
  }, [sales]);


  return (
    <div>
    
    <div className='product-list'>
    <h2>Today's Sales</h2>

<table class="table table-success table-striped-columns">
      <thead>
    <tr>
      <th scope="col">S. No.</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Salt Name</th>
      <th scope="col">Dosage</th>
      <th scope="col">Category</th>
      <th scope="col">Expire Date</th>
      <th scope="col">Item sold</th>
      <th scope="col">Total Price</th>
      <th scope="col">Total Rate</th>
    </tr>
  </thead>
  
  
  <tbody>
    
        {todaySales.map((item, index) => (
        <>
        <tr>
        <th scope="row">{index+1}</th>
        <td>{item.medicineName}</td>
        <td>{item.saltName}</td>
        <td>{item.MG}</td>
        <td>{item.category}</td>
        <td>{item.ExpireDate}</td>
        <td>{item.quantitySold}</td>
        <td>{item.MRP*item.quantitySold}</td>
        <td>{item.Rate*item.quantitySold}</td>
        </tr>
        </>
        ))}
        
        </tbody>
        </table>
        </div>

    
<div className='product-list'>

    {last7DaysSales.map((dayData) => (


      <div key={dayData.date}>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      {dayData.date}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <table class="table table-success table-striped-columns">
      <thead>
    <tr>
      <th scope="col">S. No.</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Salt Name</th>
      <th scope="col">Dosage</th>
      <th scope="col">Category</th>
      <th scope="col">Expire Date</th>
      <th scope="col">Item sold</th>
      <th scope="col">Total earning</th>
      <th scope="col">Total Rate</th>
    </tr>
  </thead>

  
  <tbody>
    
            {dayData.sales.map((item, index) => (
              <>
              <tr>
              <th scope="row">{index+1}</th>
              <td>{item.medicineName}</td>
              <td>{item.saltName}</td>
              <td>{item.MG}</td>
              <td>{item.category}</td>
              <td>{item.ExpireDate}</td>
              <td>{item.quantitySold}</td>
              <td>{item.MRP*item.quantitySold}</td>
              <td>{item.Rate*item.quantitySold}</td>
              </tr>
              </>
              
            ))}
            
            </tbody>
            </table>
      </div>
    </div>
  </div>
</div>


       
        
      </div>
    ))}
    
    </div>
  </div>
  );
};

export default Sales;
