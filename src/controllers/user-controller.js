const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const user = await userService.create(req.body);

    return res.status(201).json({
      message: "Successfully created the user.",
      success: true,
      data: user,
      err: {},
    });
  } catch (error) {
    console.error("An error occurred while creating the user:", error);

    return res.status(500).json({
      message: "Could not create user.",
      success: false,
      data: null,
      err: error.message,
    });
  }
};

module.exports = {
  create,
};
