const express= require('express');
const app = express();

const product=[
    {name:'Apple', id:30, Color:'red'},
    {name:'Mango', id:40, Color:'yellowish'},
    {name:'Orange', id:50, Color:'Oreange'},
    {name:'Banana', id:60, Color:'Yellow'}
]


app.get('/', (req, res) =>{
res.send(product);

});

app.get('/products/:id', (req, res)=>{
const prod = product.find(c => c.id === parseInt(req.params.id));
res.send(prod);
});

app.post('/products', (req, res)=>{
const prod = {
    id: 70,
    name: 'Potatoo',
    Color: 'Brown'
}
product.push(prod);
res.send(prod);
});

app.put('/products/:id', (req, res)=>{
const putprod = product.find(c => c.id === parseInt(req.params.id));

putprod.Color = "Orange";
res.send(putprod);
});

app.delete('/products/:id', (req, res)=>{
    const reqprod = product.find(c => c.id === parseInt(req.params.id));
    const reqindex = product.indexOf(reqprod);
    product.splice(reqindex, 1);

    res.send(product);


});
app.listen(4200);