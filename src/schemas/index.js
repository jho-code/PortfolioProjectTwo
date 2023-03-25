import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Ingrese un correo electrónico válido")
    .required("Campo obligatorio"),
  name: yup.string().required("Campo obligatorio"),
  subject: yup.string().required("Campo obligatorio"),
  message: yup.string().required("Campo obligatorio"),
});
