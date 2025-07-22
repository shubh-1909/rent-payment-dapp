import emailjs from "@emailjs/browser";

export const sendEmail = (formValues) => {
  emailjs.send(
    "your_service_id", // from EmailJS
    "your_template_id",
    {
      to_name: "Landlord",
      tenant_address: formValues.tenant,
      amount: formValues.amount,
    },
    "your_public_key"
  );
};
