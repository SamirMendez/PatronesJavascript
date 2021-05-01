// Patron Factory en Javascript

// Este patron nos permite trabajar creando objetos, en este caso lo haremos con un CRUD


// Creando clase
class Bus {
    // Constructor para la conexion a la base de datos
    constructor(databaseConnection) {
        this._databaseConnection = databaseConnection;
    }
    // Constructor para la conexion a la base de datos
    // Metodos de la clase
    createBus() {
        console.log('create');
    }
    updateBus() {
        console.log('update');
    }
    deleteBus() {
        console.log('delete');
    }
    readBus() {
        console.log('read');
    }
    // Metodos de la clase
}
// Creando clase
// Exportando modulo
module.exports = Bus;
// Exportando modulo