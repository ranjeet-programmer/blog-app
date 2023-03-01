const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      // console.log("here in service layer", user);
      return user;
    } catch (error) {
      console.log("something went wrong at service layer");

      throw error;
    }
  }
}

module.exports = UserService;
