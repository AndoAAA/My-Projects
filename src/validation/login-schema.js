
import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().email().required("Email is required filed"),
    password: yup.string().required("Password is required filed"),
    
});
