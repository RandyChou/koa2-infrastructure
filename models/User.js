import uuid from 'node-uuid';
import Sequelize from 'sequelize';
import sequelize from '../lib/common/sequelize';

var User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING
    },

    age: {
        type: Sequelize.INTEGER
    },

    sex: {
        type: Sequelize.ENUM,
        values: ['0', '1', '2'],
        defaultValue: '0',
        validate: {
            isIn: {
                args: [['0', '1', '2']],
                msg: '参数不正确'
            }
        }
    }
}, {
    hooks: {
        beforeCreate: function(user, options) {
            user.id = uuid.v1();
        },

        beforeBulkCreate: function(users, fields) {
            users.forEach(function(user) {
                user.id = uuid.v1();
            });
        }
    }
});

export default User;