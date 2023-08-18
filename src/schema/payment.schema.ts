import { z } from "zod"

const PaymentInfoSchema = z.object({
    number: z.string(),
    expirationDate: z.string(),
    securityCode: z.string().length(3, { message: "Security code must have 3 digits!"}),
    saveInformation: z.boolean()
});

type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

export { PaymentInfo, PaymentInfoSchema };