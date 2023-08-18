import { z } from "zod";

const PersonalInfoSchema = z.object({
    name: z.string({
        required_error: "Name is required!",
        invalid_type_error: "Name must to be string!"
    }).min(1),
    email: z.string({
        required_error: "Email is required!"
    }).email({ message: "Please provide a valid email address"}),
});

type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export { PersonalInfoSchema, PersonalInfo };
