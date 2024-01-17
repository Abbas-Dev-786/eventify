const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const validator = require("validator");

const attendeeSchema = new mongoose.Schema(
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
    // profileImg: {
    //   type: String,
    //   trim: true,
    //   default: "download_j53sib.jpg",
    // },
  },
  { timestamps: true }
);

attendeeSchema.plugin(mongoosePaginate);

const Attendee = mongoose.model("Attendee", attendeeSchema);
module.exports = Attendee;
