import prisma from "../db/dbConfig.js";
import { registerValidations } from "../validations/authValidations.js";
import catchAsync from "./../utils/catchAsync.js";

export const register = catchAsync(async (req, res, next) => {
  const payload = await registerValidations.validate(req.body);

  const user = await prisma.users.create({ data: payload });

  return res.status(200).json({ status: "success", data: user });
});
