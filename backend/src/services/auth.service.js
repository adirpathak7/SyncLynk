import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const registerUser = async (data) => {
    const existingUser = await User.findOne({
        $or: [{ email: data.email }, { username: data.username }],
    });

    if (existingUser) {
        throw new Error("User already exists!");
    }

    const user = await User.create(data);

    return {
        id: user._id,
        username: user.username,
        email: user.email,
    };
};

export const loginUser = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid credentials!");
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new Error("Invalid credentials!");
    }

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return {
        token
    };
};
