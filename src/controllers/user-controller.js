const UserService = require("../services/user-service");

const userServices = new UserService();

const create = async (req, res) => {
  try {
    const user = await userServices.create(req.body);

    if (user.success === false) {
      return res.status(201).json({
        err: user.message,
      });
    }
    return res.status(201).json({
      message: "user is created successfully",
      success: true,
      data: user,
      err: {},
    });
  } catch (error) {
    console.log("user is not created");

    return res.status(400).json({
      message: "user is not created",
      success: false,
      data: {},
      err: error.message,
    });
  }
};

module.exports = {
  create,
};
