const User = require("./user");

const getUserById = async id => {
	const user = await User.findById(id);
	return user;
};

const getAllUsers = async () => {
	const users = await User.find({});
	return users;
};

const createUser = async userDetails => {
	const newUser = await User.create(userDetails);
	return newUser;
};
const removeUserById = async id => {
	const removedUser = await User.findByIdAndRemove(id);
	return removedUser;
};

const updateUserById = async (id, update) => {
	await User.findByIdAndUpdate(id, update);
	const updatedUser = await User.findById(id);
	return updatedUser;
};

module.exports = {
	getUserById,
	getAllUsers,
	createUser,
	removeUserById,
	updateUserById
};
