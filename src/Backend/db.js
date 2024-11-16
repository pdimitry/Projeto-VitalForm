const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: 'pdimitry',     
  database: 'vitalform'
});


connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão com o MySQL:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;