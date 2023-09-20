const express = require('express')

const moduloAutores= require('./moduloAutores')


const app = express()

const port = 8000;

let libros = require('./libros.json');
const router = require('./moduloAutores');




app.use(express.json());

app.use('/books', moduloAutores)

router.get("/", (req, res) => {
  res.status(200).send(libros); // Enviar la lista de libros como respuesta
});













/* app.route('/libros/:id')
.get((req, res)=>{
    const id =req.params.id
    const libro = libros.find(libro =>  libro.id == id)
    if(libro){
    res.status(200).send(libro)
    }else{
        res.status(404).send({
            mensaje: "libro no encontrado"
        })
    }
    
})
.post((req, res)=>{
    res.send('Hola soy la ruta post')
})
.delete((req, res)=>{
    const id = req.params.id
    libros = libros.filter((libro)=> libro.id != id)
    res.status(200).send(libros)
 
})
 */


app.listen(port,()=>{
    console.log(`servidor corriendo en el puerto ${port}`)
})



