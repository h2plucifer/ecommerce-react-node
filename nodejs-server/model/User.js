import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: [8, "Password must be more than 8 characters"],
      max: [50, "Password must be less than 20 characters"],
    },
    adrress: {
      trype: String,
    },
    role: {
      type: String, //admin//customer
      default: "customer",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
