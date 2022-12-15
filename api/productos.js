class Api {

    constructor() {
        this.productos = [
            {
            title: "Iphone 14 Pro Max", 
            price: 1650, 
            thumbnail: "https://i.ibb.co/KGKjZBG/i14-Pro-Max.png",
            id: 1
            }
        ]
    }

    productosTodos(){

        if( this.productos.length > 0 ) {

            return this.productos
    
        } else {

            return {error: 'no se encontraron productos'} 

        }

    }

    prodPorId( newID ){

        let id = Number(newID.slice(1))

        let existe = this.productos.some( p => p.id == id )

        if( existe ) {
            
            return this.productos.find( p => p.id == id )
    
        } else {
    
            return {error : 'producto no encontrado'}
    
        }

    }

    guardar( newProd ){

        let lastElement = this.productos.length -1;

        let id = this.productos.length > 0 ? this.productos[lastElement].id + 1 : 1; 
    
        let prod = {...newProd, id: id }

        this.productos.push( prod )
    
        return prod

    }

    actualizar( prod, newID ){

        let id = Number(newID.slice(1))

        prod.id = id

        let index = this.productos.findIndex( prod => prod.id == id)

        this.productos.splice(index,1,prod)

        return prod

    }

    eliminar( newID ){

        let id = Number(newID.slice(1))

        let existe = this.productos.some( p => p.id == id )
    
        if( existe ) {
            
            let item = this.productos.find( (p) => p.id == id );
    
            let indice = this.productos.indexOf( item );
            
            this.productos.splice( indice, 1 )
    
            return `Producto con id ${id} eliminado.`
    
        } else {
    
            return {error: 'producto no encontrado'}
    
        }

    }

}


export default Api