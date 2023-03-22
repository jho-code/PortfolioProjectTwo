import { useState, useRef } from "react";

// import motion
import { motion } from "framer-motion";

// import emailjs
import emailjs from "@emailjs/browser";

// import components
import { EarthCanvas } from "../../components/canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion.js";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_u5crfnf",
        "template_pt6i5zw",
        {
          from_name: form.name,
          to_name: "Jhoswe",
          from_email: form.email,
          to_email: "jhoswe.castro@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        "kVuo2IHv5mLM7zORs"
      )
      .then(() => {
        setLoading(false);
        alert(
          "Gracias por tu mensaje, pronto te contactaré para poder hablar un poco más"
        );
        setForm(
          {
            name: "",
            email: "",
            subject: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Ups, algo salio mal");
          }
        );
      });
  };

  return (
    <section className="lg:flex-row flex-col-reverse flex lg:gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <p className="p mt-10 text-center lg:text-left">Hablemos</p>
        <h2 className="h2 text-center lg:text-left">Contacto</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <div className="flex gap-x-10">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="px-6 py-4 placeholder:text-secondary text-primary outline-none border-b border-b-primary h-12 bg-transparent w-full font-medium capitalize"
            />
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-6 py-4 placeholder:text-secondary text-primary outline-none border-b border-b-primary h-12 bg-transparent w-full font-medium"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Asunto"
            className="px-6 py-4 placeholder:text-secondary text-primary outline-none border-b border-b-primary h-12 bg-transparent w-full font-medium"
          />
          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mensaje"
            className="px-6 py-4 placeholder:text-secondary text-primary outline-none border-b border-b-primary bg-transparent w-full font-medium"
          />
          <div className="flex justify-center lg:justify-start">
            {loading ? (
              "Enviando..."
            ) : (
              <button className="inline-block z-[2] leading-4 ease-in-out duration-[0.5s] btn btn2 mb-[1.5rem]">
                <i />
                <span className="z-[2] ease-in-out duration-[0.5s]">
                  Enviar
                </span>
              </button>
            )}
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto xl:m-0 lg:h-[400px] lg:m-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
