import { z } from "zod";
import catchErrors from "../utils/catchErrrors";


const registerSchema = z.object({
    email: z.string().email().min(1).max(255),
    password: z.string().min(6).max(255),
    confirmPassword: z.string().min(6).max(255),
    userAgent : z.string().optional()

}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path : ["confirmPassword"],
})

export const registerHandler = catchErrors(
    async( req, res) => {
        // validate request
        const request = registerSchema.parse({
            ...req.body,
            userAgent: req.headers["user-agent"]
        })

        //cal services


        // return response
    }
)