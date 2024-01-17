const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const validator = require("validator");

const organiserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "Please Enter full name"],
    },
    email: {
      type: String,
      trim: true,
      validate: [validator.isEmail, "Enter valid email address"],
      required: [true, "Please Enter email address"],
    },
    password: {
      type: String,
      trim: true,
      min: [8, "password should be atleast 8 characters long"],
      max: [25, "password should be less than 25 characters"],
      select: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isCreator: {
      type: Boolean,
      default: true,
    },
    event: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Event",
      required: [true, "organiser must belong to a event"],
    },
  },
  { timestamps: true }
);

organiserSchema.plugin(mongoosePaginate);

const Organiser = mongoose.model("Organiser", organiserSchema);
module.exports = Organiser;
