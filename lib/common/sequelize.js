import Sequelize from 'sequelize';
import cls from 'continuation-local-storage';
import config from '../config';

// Automatically pass transactions to all queries
var namespace = cls.createNamespace('my-trasation-namespace');
Sequelize.cls = namespace;

export default new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, config.mysql);