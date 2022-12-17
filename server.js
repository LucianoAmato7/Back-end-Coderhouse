import Api from "./api/productos.js";
import express from "express"

const api = new Api()

const app = express()

const router = express.Router()


router.use(express.json());
router.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/api', router)


//FUNCIONALIDADES
// ----------------------------------------------|


//devuelve todos los productos
router.get('/productos', (req, res) => {   
    
    res.json( api.productosTodos() )
    
})


// devuelve un producto según su id
router.get('/productos/:id', (req, res) => {
    
    let { id } = req.params

    res.json(api.prodPorId(id))

})

    
//recibe y agrega un producto, y lo devuelve con su id asignado. ( POR MEDIO DEL FORM ( "http://localhost:8080/" ) )
router.post('/productos', (req, res) => {
    
    let newProd = req.body
    
    res.json( api.guardar( newProd ) )
    
})


//recibe y actualiza un producto según su id.
router.put('/productos/:id', (req, res) => {

    let { id } = req.params

    let prod = req.body

    res.json( api.actualizar( prod, id ) )

})


//elimina un producto según su id.
router.delete('/productos/:id', (req, res) =>{
    
    let { id } = req.params
    
    res.json( api.eliminar( id ) )

})


//INICIAMOS EL SERVIDOR
// ----------------------------------------------|

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log( `Servidor corriendo en el puerto ${ server.address().port }` );
})

server.on( 'error', ( error ) => {
    console.log( `Error en servidor: ${error}` );
} )