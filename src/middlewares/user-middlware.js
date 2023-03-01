const UserService = require("../services/user-service");

const userService = new UserService();

const checkIfUserExists = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userService.getByEmail(email);

    if (user) {
      return res.status(409).json({
        message: "A user with this email already exists.",
        success: false,
        data: null,
        err: {},
      });
    }

    next();
  } catch (error) {
    console.error(
      "An error occurred while checking if the user exists:",
      error
    );

    return res.status(500).json({
      message: "Could not check if the user exists.",
      success: false,
      data: null,
      err: error.message,
    });
  }
};

module.exports = {
  checkIfUserExists,
};
