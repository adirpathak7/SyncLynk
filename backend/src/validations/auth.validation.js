import Joi from "joi";

export const registerSchema = Joi.object({
    username: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(1).required(),
    publicKey: Joi.string().required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
