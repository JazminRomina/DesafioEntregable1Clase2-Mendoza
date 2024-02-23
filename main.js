class ProductManager{
    constructor() {
        this.products = []
    }

    static id = 0

    addProducts(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || ! code || !stock){
            return console.log('You forgot to put something.')
        }
        else{
            const found = this.products.find((array) => array.code === code)
            if (found){
               return console.log('There are two products that had the same code.')
            }
            else{
                ProductManager.id++
                return this.products.push({title, description, price, thumbnail, code, stock, id: ProductManager.id})
            }
        }
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const idProduct = this.products.find((array) => array.id === id)
        if(idProduct){
            return console.log(idProduct)
        }
        else{
            return console.log('Not Found')
        }
    }
}

const products = new ProductManager

console.log(products.getProducts()) // Devolverá un arreglo vacío. []
products.addProducts('Producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25) // Producto con id:1
products.addProducts('Producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25) // Producto con el mismo código.
products.addProducts('Producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc124', 25) // Producto con id:2 y diferente código.
console.log(products.getProducts()) // Devolverá un arreglo con los productos en lugar de un arreglo vacío.
products.getProductById(2) // Buscará si se encuentra el id de el producto, a ver si se encuentra en el arreglo. En este caso se mostrará el producto del ID que buscamos.
products.getProductById(4) // NOT FOUND.