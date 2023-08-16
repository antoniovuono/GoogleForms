import { z } from "zod"

const PaymentInfoSchema = z.object({
    number: z.number().min(1, { message: "Card number is required!" }),
    expirationDate: z.string(),
    securityCode: z.string(),
    saveInformation: z.boolean()
});

type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

export { PaymentInfo, PaymentInfoSchema };