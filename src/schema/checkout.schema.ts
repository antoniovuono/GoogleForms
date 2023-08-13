import { z } from "zod";

const PersonalInfoSchema = z.object({
    name: z.string().min(1, { message: "Name is required!" }),
    email: z.string().email({ message: "Please provide a valid email address"}),
});

type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export { PersonalInfoSchema, PersonalInfo };
