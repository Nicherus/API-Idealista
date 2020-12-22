const { Pool } = require('pg');	

const connection = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,	
	port: process.env.DB_PORT,	
	database: process.env.DB_DATABASE,	
	password: process.env.DB_PASSWORD,
	// ssl: true,	
});

// const connection = new Pool({ 
// 	connectionString: process.env.DATABASE_URL, 
// 	ssl: {rejectUnauthorized: false}
// });

module.exports = connection;