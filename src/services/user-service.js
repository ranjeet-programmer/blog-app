const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);

      console.log("service layer : ", user);
      // console.log("here in service layer", user);

      if (user.success == false) {
        return { message: "User already exists", success: false };
      }

      return user;
    } catch (error) {
      console.log("something went wrong at service layer");

      throw error;
    }
  }

  async getByEmail(email) {
    try {
      const user = this.userRepository.getByEmail(email);
      return user;
    } catch (error) {
      console.log("something went wrong at service layer");

      throw error;
    }
  }
}

module.exports = UserService;
