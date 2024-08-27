import * as yup from "yup";

export const registerSchema = yup.object({
    fullName: yup.string().required("Fullname is required filed").min(3).max(50),
    email: yup.string().email().required("Email is required filed"),
    phone: yup.string().min(8),
    password: yup.string().required("Password is required filed"),
    cPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
});