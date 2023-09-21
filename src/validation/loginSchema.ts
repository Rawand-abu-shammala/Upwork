import * as yup from 'yup';

const loginSchema = yup.object({
    username: yup.string().min(8).max(50),
    password: yup.string().min(8).max(50)
        .matches(/[a-z]/, 'password should contain at least one small letter')
        .matches(/[A-Z]/, 'password should contain at least one capital letter'),
})

export default loginSchema;