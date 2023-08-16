import React, { createContext, useContext, useState } from "react";
import { PersonalInfo } from "../schema/checkout.schema";
import { DeliveryInfo } from "../schema/delivery.schema";
import { PaymentInfo } from "../schema/payment.schema";

type CheckoutContextType = {
  setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo | null>>;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo | null>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo | null>>;
  onSubmitAll: () => Promise<boolean>;
};

const CheckoutContenxt = createContext<CheckoutContextType>({
  setPersonal: () => {},
  setPayment: () => {},
  setDelivery: () => {},
  onSubmitAll: () => Promise.resolve(false),
});

function CheckoutContextProvider({ children }) {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [payment, setPayment] = useState<PaymentInfo | null>(null);

  const onSubmitAll = async () => {
    console.log("Submit the multi step form");
    console.log(personal);
    console.log(delivery);
    console.log(payment);

    return true;
  };

  return (
    <CheckoutContenxt.Provider
      value={{ setPersonal, setDelivery, setPayment, onSubmitAll }}
    >
      {children}
    </CheckoutContenxt.Provider>
  );
}

const useCheckoutContext = () => useContext(CheckoutContenxt);

export { useCheckoutContext, CheckoutContextProvider };
