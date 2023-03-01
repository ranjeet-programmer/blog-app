const UserRepository = require("../repository/user-repository");
const bcrypt = require("bcryptjs");
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

  async signIn(email, plainPassword) {
    const user = await this.getByEmail(email);

    if (!user) {
      throw { Error: "user not exists" };
    }

    const isPasswordValid = await bcrypt.compareSync(
      plainPassword,
      user.password
    );

    console.log("In service", isPasswordValid);

    return isPasswordValid;
  }
}

module.exports = UserService;
