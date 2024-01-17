const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const validator = require("validator");

const attendanceSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "attendance must belong to a event"],
    },
    attendee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attendee",
      required: [true, "attendance must belong to a attendee"],
    },
    scanner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organiser",
      required: [true, "attendance must belong to a scanner"],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

attendanceSchema.plugin(mongoosePaginate);

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
