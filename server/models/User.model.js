import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  phone: {
    type: String,
    required: true, // Phone number is required
    unique: true, // Ensure phone numbers are unique
    validate: {
      validator: function (v) {
        // Simple regex to validate phone numbers (e.g., international format)
        return /^[\d\+\-\.\(\) ]{10,15}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number.`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Minimum length for password
    validate: {
      validator: function (v) {
        // Custom validation: Password must have at least one letter, one number, and one special character
        return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid password. It must contain at least one letter, one number, and one special character.`,
    },
  },
  role: {
    type: String,
    default: "user",
  },
});

// Export the User model
export const User = model("User", userSchema);
