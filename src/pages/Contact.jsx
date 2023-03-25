import { useState } from "react";

// import motion
import { motion } from "framer-motion";

// import emailjs
import emailjs from "@emailjs/browser";

// import components
import { EarthCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, transitionGeneral } from "../utils/motion.js";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (values, actions) => {
    try {
      setLoading(true);
      emailjs
        .send(
          "service_u5crfnf",
          "template_pt6i5zw",
          {
            from_name: values.name,
            to_name: "Jhoswe",
            from_email: values.email,
            to_email: "jhoswe.castro@gmail.com",
            subject: values.subject,
            message: values.message,
          },
          "kVuo2IHv5mLM7zORs"
        )
        .then(() => {
          setLoading(false);
          alert(
            "Gracias por tu mensaje, pronto te contactaré para poder hablar un poco más"
          );
          actions.resetForm();
        });
    } catch {
      setLoading(false);
      actions.resetForm();
      alert("Ups, algo salio mal");
    }
  };

  const {
    handleSubmit,
    values,
    isSubmitting,
    handleBlur,
    errors,
    handleChange,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // console.log(errors);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transitionGeneral}
      className="lg:flex-row flex-col-reverse flex lg:gap-10 overflow-hidden"
    >
      <div>
        <h2 className="h2 text-center lg:text-left">Contacto</h2>
        <p className="mt-10 text-center lg:text-left">
          ¡Hola! Si tienes alguna pregunta, comentario o solicitud, por favor
          <br />
          no dudes utilizar el formulario o mediante mis redes sociales.
        </p>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <div className="flex gap-x-10">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nombre"
              className={errors.name && touched.name ? "input error" : "input"}
            />
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              className={
                errors.email && touched.email ? "input error ca" : "input"
              }
            />
          </div>
          <input
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Asunto"
            className={
              errors.subject && touched.subject ? "input error" : "input"
            }
          />
          <textarea
            rows="7"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Mensaje"
            className={
              errors.message && touched.message ? "input error" : "input"
            }
          />
          <div className="flex justify-center lg:justify-start">
            <button
              disabled={isSubmitting}
              type="submit"
              className="inline-block z-[2] leading-4 ease-in-out duration-[0.5s] btn btn2 mb-[1.5rem]"
            >
              <i />
              <span className="z-[2] ease-in-out duration-[0.5s]">
                {loading ? "Enviando..." : "Enviar"}
              </span>
            </button>
          </div>
          {errors.email && touched.email && (
            <p className="text-[#fc8181] text-center mt-[-2rem]">
              {errors.email}
            </p>
          )}
        </form>
      </div>
      <div className="xl:flex-1 xl:h-auto xl:m-0 lg:h-[400px] lg:m-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Contact, "contact");
