const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Event must have a name"],
      minLength: [3, "name should be atleast 3 characters long"],
      maxLength: [35, "name should be less than 3 characters"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Event must have a description"],
    },
    startDateTime: {
      type: Date,
      trim: true,
      required: [true, "Event must have a start date and time"],
    },
    endDateTime: {
      type: Date,
      trim: true,
      required: [true, "Event must have a end date and time"],
    },
    venue: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
        validate: {
          validator: function (coords) {
            return coords.length === 2;
          },
          message: () => `Enter coordinates in proper format`,
        },
        required: [true, "Event venue must have a location."],
      },
      address: {
        type: String,
        trim: true,
        required: [true, "Please Enter address"],
      },
    },
    status: {
      type: String,
      lowercase: true,
      enum: {
        values: ["open", "closed"],
        message: "not a valid status",
        default: "open",
      },
      default: "open",
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

tourSchema.index({ venue: "2dsphere" });

eventSchema.plugin(mongoosePaginate);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
