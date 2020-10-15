/* Express is a web application framework of Node js 

Earlier in nodetut4 we have write custome backend with hardwork.
So Express is a Package which simplify the web development in Node JS, as it helps in url parsing,Routing,
scalability, providng functions.

Express is still in development.
*/

const express = require ("express"); // express module import
const app= express();                // created express app
const port =3000;
app.get("/", (req,res)=>{         // anyone who go in this app at slash end point then this call back funt will run

    res.status(200).end("This is my first Express App");
});

app.get("/about", (req,res)=>{         

    res.send("This is my get about Express App");
});

app.post("/about", (req,res)=>{         

    res.send("This is my post about Express App");
});

app.listen(port, ()=>{
    console.log(`Application launch on port ${port}`);
});                                          
//After this we can test this express app on POSTMAN by coping url as localhost:3000