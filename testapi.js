const express = require('express');
const app = express();

const item=[
    {name:"Apple", price:300, color: "red"},
    {name:"Orange", price:400, color: "Orange"},
    {name:"Banana", price:500, color: "Yellow"},
    {name:"Mango", price:600, color: "Redish"}
]

app.get('/', (req, res)=>{

   res.send(item); 

});

app.get('/items/:price', (req, res)=>{

    const itemid= item.find(c=>c.price === parseInt(req.params.price));
    res.send(itemid);
});

app.post('/items', (req, res)=>{

    const newitem = {
        name:'Pine Apple',
        price: 800,
        color:'Brown'
    } 
    item.push(newitem)
    res.send(item);
});


app.put('/items/:price', (req, res)=>{
const itemput=item.find(c=> c.price === parseInt(req.params.price));
// const index= item.indexOf(itemput);
itemput.color="black";
res.send(itemput);

});


app.delete('/items/:price', (req, res)=>{
    const itemdel=item.find(c=> c.price === parseInt(req.params.price));
     const index= item.indexOf(itemdel);
    item.splice(index, 1);
    res.send(item);

    
    });
    




app.listen(3200);