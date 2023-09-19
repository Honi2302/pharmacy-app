const express = require("express")
const app =express()
const addStock = require("./db/addStock")
const Sale =require("./db/sale")
const Demand= require("./db/demand")
require("./db/config")
const cors = require('cors')
app.use(express.json())

app.use(cors());


app.get("/stock", async (req, resp)=>{
    let products = await addStock.find()
    if(products.length>0){
        resp.send(products)
    } 
    else{

        resp.send({result:"No product found"})
    }
})

app.post('/addstock', async (req, resp)=>{
    let item = new addStock(req.body)
    let result = item.save()
    resp.send(result)
    })




    app.delete("/delete/:id", async(req, resp)=>{
        const result = await addStock.deleteOne({_id:req.params.id})
         resp.send(result)
     })
     
     app.get("/update/:id", async(req, resp)=>{
         const result = await addStock.findOne({_id:req.params.id})
          resp.send(result)
      })
     
      app.put("/update/:id", async(req, resp)=>{
         let result = await addStock.updateOne(
             {_id:req.params.id},
             {$set: req.body}
         )
         resp.send(result)
      })
     
      app.get('/search/:key', async(req, resp)=>{
         let result = await addStock.find({
             "$or":[
                 {medicineName:{$regex:req.params.key}},
                 {saltName:{$regex:req.params.key}}
             ]
         })
         resp.send(result)
      })

      app.post('/api/sell/:id', async (req, res) => {
        
          const productId = req.params.id;
          const { quantitySold } = req.body;
      
          const product = await addStock.findById(productId);
          if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
          }
      
          if (addStock.Quantity < quantitySold) {
            return res.status(400).json({ error: 'Not enough stock to complete the sale.' });
          }
          const medicineName = product.medicineName
          const saltName = product.saltName
          const MG = product.MG
          const category = product.category
          const ExpireDate = product.ExpireDate
          const MRP = product.MRP
          const Rate =product.Rate

         
          product.Quantity -= quantitySold;

          await product.save();
      
          const sale = new Sale({
            productId,
            quantitySold,
            medicineName,
            saltName,
            MG,
            category,
            ExpireDate,
            MRP,
            Rate,
            saleDate: new Date(),
          });
      
          await sale.save();
      
          res.json({ message: 'Sale completed successfully.' });
        
      });

      app.get("/sales", async (req, resp)=>{
        let products = await Sale.find()
        if(products.length>0){
            resp.send(products)
        } 
        else{
    
            resp.send({result:"No product found"})
        }
    })

    app.post('/addDemand', async (req, resp)=>{
        let item = new Demand(req.body)
        let result = item.save()
        resp.send(result)
        })

        app.get("/demand", async (req, resp)=>{
            let products = await Demand.find()
            if(products.length>0){
                resp.send(products)
            } 
            else{
        
                resp.send({result:"No Demand found"})
            }
        })

        app.delete("/demand/delete/:id", async(req, resp)=>{
            const result = await Demand.deleteOne({_id:req.params.id})
             resp.send(result)
         })

app.listen(5000)