import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/my-account-icon.png',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  }, { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;