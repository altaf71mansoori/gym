/*Static files are files which are kept publically on server and anyone can use/download it directly through link 
without login or coming to website

Template Engine - it process template, means we give the input in any format and template engine gives the 
o/p in proper template format ie html bana kar deta h

Pug Template engine - npm install pug
*/

const path = require ("path");
const express = require ("express"); // express module import
const app= express();                // created express app
const port =3000;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));  // for serving static files.

//PUG SPECIFIC STUFF
app.set('view engine','pug');  //Set the template engine as pug.

app.set('views',path.join(__dirname,'template')); //set the views directory.

app.get('/', function (req, res) {              // our pug demo end point.
    res.status(200).render('demo.pug', { title: 'Pug Used', message: 'We are using pug' })
});


app.listen(port, ()=>{
    console.log(`Application launch on port ${port}`);
 }); 