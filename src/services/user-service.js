const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.error("An error occurred while creating the user.", error);
      throw error;
    }
  }

  async getByEmail(email) {
    try {
      const user = await this.userRepository.getByEmail(email);
      return user;
    } catch (error) {
      console.error(
        `An error occurred while getting the user with email ${email}.`,
        error
      );
      throw error;
    }
  }
}

module.exports = UserService;
