// Patron Singleton en Javascript


// Creamos una variable para instanciar la clase
let classInstance;
// Creamos una variable para instanciar la clase
// Creamos una clase para nuestro patron de diseño
class Samir {
    // Constructor de nuestra clase
    constructor(constructorData) {
        // Codigo ejecutado al inicializar el constructor
        if (!classInstance) {
            classInstance = this;
            this.myClassData = constructorData;
        } else {
            return classInstance;
        }
        // Codigo ejecutado al inicializar el constructor
    }
    // Constructor de nuestra clase
    // Obteniendo valores
    get classData() {
        return this.myClassData;
    }
    // Obteniendo valores
}
// Creamos una clase para nuestro patron de diseño
// Instanciando clases
console.log(new Samir('Parametro para mostrar').constructorData);
// Instanciando clases
