import { z } from "zod";

const DeliveryInfoSchema = z.object({
    city: z.string().min(1),
    postalCode: z.string(),
    address: z.string(),
    shipping: z.enum(['free', 'fast', 'same_day'])
});

type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>;

export { DeliveryInfoSchema, DeliveryInfo };