"use client"

import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ffg7jti', // replace with your EmailJS service ID
      'template_bf4p1eh', // replace with your EmailJS template ID
      formData,
      'zRi-RVhp9dKKyThly' // replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Your message has been sent successfully!');
    })
    .catch((err) => {
      console.log('FAILED...', err);
      toast.error('Failed to send your message. Please try again.');
    });
  };

  return (
    <>
      <FadeIn>
        <form onSubmit={handleSubmit}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Work inquiries
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput label="Name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} />
            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextInput
              label="Company"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
            />
            <TextInput
              label="Phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextInput
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">Budget</legend>
              </fieldset>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <RadioInput label="200K – 500K" name="budget" value="25" checked={formData.budget === "25"} onChange={handleChange} />
                <RadioInput label="500K – 750K" name="budget" value="50" checked={formData.budget === "50"} onChange={handleChange} />
                <RadioInput label="750K – 1M" name="budget" value="100" checked={formData.budget === "100"} onChange={handleChange} />
                <RadioInput label="More than 1M" name="budget" value="150" checked={formData.budget === "150"} onChange={handleChange} />
              </div>
            </div>
          </div>
          <Button type="submit" className="mt-10">
            Let’s work together
          </Button>
        </form>
      </FadeIn>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
