export default {
	mysql: {
		database: 'test',
		username: 'root',
		password: 'suishipen..dev',

		host: '119.29.19.250',
		port: '3306',
		dialect: 'mysql',

		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},

		timezone: '+08:00',

		define: {
			paranoid: true,
	    	freezeTableName: true,
		}
	}
};