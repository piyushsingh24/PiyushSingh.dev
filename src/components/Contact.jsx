import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "dcd60d8a-099b-4b76-ab03-0fa2d0988ea9"); // your Web3Forms access key
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Form submitted successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <h1 className="bg-slate-800 inline-block px-6 py-2 rounded-xl">
          <button>
            <a href="/PiyushSinghDeveloper.pdf" download={"/PiyushSinghDeveloper.pdf"}> Download Cv</a>
          </button>
        </h1> 

{/* 
        <div className="mt-2 border-2 bg-gray-200 rounded-xl Contact_animation px-1 py-3">
          <span>
            <a href="https://wa.me/qr/UMUJ4QTU5MHKP1"> Contact & Whatsapp ➡ 8851151976</a>
            <a className="block" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqSxxsSrDbMtVrZSZvcstLpJPXlVlvqCXFqgKFjqRPGRxTrhdCwFJdNxwWDHlclmjlQG"> GMail ➡  Piyushsingh2706@gmail.com</a>
            
          </span>

        </div> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Name */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          {/* Email */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          {/* Phone */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Phone Number</span>
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder='Enter your phone number'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              pattern='[0-9]{10}'
              title='Please enter a valid 10-digit phone number'
              required
            />
          </label>

          {/* Message */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-70'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
