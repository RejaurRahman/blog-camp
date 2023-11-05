"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

import commentsStyles from "@/components/App/PostComments/PostComments.module.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <hr
        className={`inline-block w-full mt-5 mb-10 mx-auto border ${commentsStyles.seperator}`}
      />
      <h3
        className="text-3xl pt-7 pb-12"
      >
        Leave a message below!
      </h3>
      <form
        className={`flex items-center p-5 mb-10 ${commentsStyles.form}`}
        onSubmit={handleSubmit}
      >
        <label className="block mb-5 w-full">
          <input
            className={`rounded py-2 px-3 w-full form-input block outline-none ${commentsStyles.field}`}
            onChange={handleChange}
            placeholder="Your name"
            type="text"
            value={formData.name}
          />
        </label>
        <label className="block mb-5 w-full">
          <input
            className={`rounded py-2 px-3 w-full form-input block outline-none ${commentsStyles.field}`}
            onChange={handleChange}
            placeholder="Your chosen email address"
            type="email"
            value={formData.email}
          />
        </label>
        <label className="block mb-5 w-full">
          <textarea
            className={`rounded py-2 px-3 w-full form-textarea block outline-none ${commentsStyles.field}`}
            onChange={handleChange}
            placeholder="Add your message here"
            rows={8}
            value={formData.message}
          />
        </label>
        <button
          className={`rounded px-8 w-fit h-11 ${commentsStyles.button}`}
        >
          Send Message
        </button>
      </form>
    </>
  )
}
