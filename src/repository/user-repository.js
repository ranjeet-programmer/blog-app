const User = require("../models/User");
const { use } = require("../routes/v1");

class UserRepository {
  async create(data) {
    const { name, email, password } = data;

    try {
      const newUser = new User({
        name,
        email,
        password,
      });

      // Save the new user to the database
      const user = await newUser.save();

      return user;
    } catch (error) {
      // Log the error and rethrow it with a standard error message
      console.error("Error creating user:", error.message);
    }
  }
}

module.exports = UserRepository;
