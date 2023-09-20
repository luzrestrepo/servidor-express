const express = require('express')

const router = express.Router();

let libros = require('./libros.json')

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const libro = libros.find((libro) => libro.id == id);
  if (libro) {
    res.status(200).send(libro);
  } else {
    res.status(404).send({
      mensaje: "libro no encontrado",
    });
  }
});



//ruta del modulo de libros crear  
router.post("/", (req, res) => {
  const libroNuevo = req.body;
  libros.push(libroNuevo);
  console.log("****", libroNuevo);
  res.status(200).send({
    messaje: "libro creado exitosamente",
  });
});

// eliminar
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  libros = libros.filter((libro) => libro.id != id);
  res.status(200).send(libros);
});
//actualizar
router.put("/:id", (req, res) => {
  const libro = req.body;
  const idLibro = libro.id;
  const posicion = libros.findIndex((libro) => libro.id === idLibro);
  if (posicion !== -1) {
    libros[posicion] = libro;
    res.status(200).send({
      mensaje: "libro actualizado",
    });
  } else {
    res.status(404).send({
      mensaje: "libro no encontrado",
    });
  }
});






module.exports = router;