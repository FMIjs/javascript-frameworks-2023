import * as yup from 'yup';

export const signUpSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required()
});
