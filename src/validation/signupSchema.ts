import * as yup from 'yup';

const signupSchema = yup.object({
    username: yup.string().min(8).max(50),
    password: yup.string().min(8).max(50)
        .matches(/[a-z]/, 'password should contain at least one small letter')
        .matches(/[A-Z]/, 'password should contain at least one capital letter'),
    passwordConfirmation: yup.mixed().oneOf([yup.ref('password')], "passwords don't match!").required(),
})

export default signupSchema;