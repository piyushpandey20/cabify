const blacklistTokenModel = require("../models/blacklistToken.model");
const cabDriverModel = require("../models/cabDriver.model");
const cabDriverServices = require("../services/cabDriver.service");
const { validationResult } = require("express-validator");

module.exports.registerCabDriver = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }
  const { fullName, email, password, vehicle } = req.body;

  const isCabDriverAlreadyExist = await cabDriverModel.findOne({ email });
  if (isCabDriverAlreadyExist) {
    return res.status(400).json({ message: "Cab Driver already exists" });
  }

  const hashedPassword = await cabDriverModel.hashPassword(password);

  const cabDriver = await cabDriverServices.createCabDriver({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = cabDriver.generateAuthToken();
  res.status(201).json({ token, cabDriver });
};

module.exports.loginCabDriver = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const cabDriver = await cabDriverModel.findOne({ email }).select("+password");
  if (!cabDriver) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await cabDriver.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = cabDriver.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, cabDriver });
};

module.exports.getCabDriverProfile = async(req,res,next) => {
    res.status(200).json({ cabDriver: req.cabDriver });
}

module.exports.logoutCabDriver = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blacklistTokenModel.create({ token });

    res.clearCookie('token');

    res.status(200).json({ message: 'Logout successfully' });
}