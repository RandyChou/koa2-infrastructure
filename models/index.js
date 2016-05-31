import User from './User';
import Account from './Account';
import UserRole from './UserRole';
import Role from './Role';
import Info from './Info';

// 一对一
// User的实例对象将拥有getAccount、setAccount、addAccount, createAccount方法
User.hasOne(Account, {onDelete: 'cascade'});
// Account的实例对象将拥有getUser、setUser、addUser, createUser方法
Account.belongsTo(User);

// 多对多
// User的实例拥有getRoles、setRoles、addRole、addRoles、createRole、removeRole、hasRole方法
User.belongsToMany(Role, {through: UserRole});
// Role的实例拥有getUsers、setUsers、addUser、addUsers、createUser、removeUser、hasUser方法
Role.belongsToMany(User, {through: UserRole});

// 一对多
// User的实例对象将拥有getInfos、setInfos、addInfo、createInfo、removeInfo、hasInfo方法
User.hasMany(Info, {onDelete: 'cascade'});
// Info的实例对象将拥有getUser、setUser、createUser方法
Info.belongsTo(User);

export default {
	user: User,
	account: Account,
	userRole: UserRole,
	role: Role,
	info: Info
};