import { registerUser, loginUser } from "../services/auth.service.js";
import { registerSchema, loginSchema } from "../validations/auth.validation.js";

export const register = async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {
        const user = await registerUser(req.body);
        res.status(201).json({
            success: true,
            message: "User registered successfully.",
            user,
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

export const login = async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {
        const data = await loginUser(req.body.email, req.body.password);
        res.status(200).json({
            success: true,
            ...data,
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};
