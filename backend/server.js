import express from 'express'; //module js import

const app =express()


// app.useexpress.static('dist')) midlleware nd you not have to write with slash

app.get('/',(req,res)=>{
    res.send('Server is readay ');
});



app.get('/api/jokes',(req,res)=>{
    const jokes=[
{
    id:1,
    title:'A first joke ',
    content:'this is a first joke ',
},
{
    id:2,
    title:'A second joke ',
    content:'this is a second joke ',
},
{
    id:3,
    title:'A third joke ',
    content:'this is a three joke ',
},
{
    id:4,
    title:'A four joke ',
    content:'this is a four joke ',
},
{
    id:5,
    title:'A five joke ',
    content:'this is a five joke ',
},
{
    id:6,
    title:'A six joke ',
    content:'this is a six joke ',
},
{
    id:7,
    title:'A seven joke ',
    content:'this is a seven joke ',
},
    ];

    res.send(jokes)
})


const port =process.env.PORT || 3000;

app.listen(port ,()=>{
    console.log(`Serve at http://localhost:${port}`);

});