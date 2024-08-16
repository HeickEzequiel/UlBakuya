const server = require("./src/server.js");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => { ///// true: resetea la tabla en cada cambio, false no restea la tabla
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
