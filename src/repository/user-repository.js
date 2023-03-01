const User = require("../models/User");

class UserRepository {
  async create(data) {
    const { name, email, password } = data;

    // Check if user already exists
    const existingUser = await this.getByEmail(email);
    if (existingUser) {
      return { message: "User already exists", success: false };
    }

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
      throw new Error("Could not create user");
    }
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      console.error(error);
      console.log(
        "something went wrong in findUserByEmail function in repository "
      );
    }
  }
}

module.exports = UserRepository;
