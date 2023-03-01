const User = require("../models/User");

class UserRepository {
  async create(data) {
    const { name, email, password } = data;

    try {
      const newUser = new User({
        name,
        email,
        password,
      });

      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Could not create user");
    }
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      onsole.error("something went wrong in getEmail repo function");
      throw new Error("Could not create user");
    }
  }
}

module.exports = UserRepository;
