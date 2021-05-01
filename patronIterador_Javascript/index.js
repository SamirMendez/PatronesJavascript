// Patron Iterador en Javascript
// Este patron es para acceder estructuras de datos complejas

const Logs = require('/Logs');

const localLogs = new Logs();

localLogs.fetchData();

while(localLogs.hasNext()) {
    let currentLog = localLogs.next();
    console.log(currentLog);
}