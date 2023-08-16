import { z } from "zod";

const DeliveryInfoSchema = z.object({
    city: z.string().min(1, { message: 'City is required!'}),
    postalCode: z.string().min(1, { message: 'Postal Code is required!'}),
    address: z.string().min(1, { message: 'Address is required!'}),
    shipping: z.enum(['free', 'fast', 'same_day'])
});

type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>;

export { DeliveryInfoSchema, DeliveryInfo };