"use client";

import { useFormspark } from "@formspark/use-formspark";
import React, { InputHTMLAttributes, useState } from "react";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

import styles from "@/components/App/Blog/PostComments/PostComments.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  fieldName: string;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
}

interface FormProps {
  formFields: any[];
}

export function InputField({ type, id, fieldName, required, placeholder, register }: InputFieldProps) {
  return (
    <>
      <label htmlFor={id}>{fieldName}</label>
      <input
        {...register(id)}
        aria-describedby={type}
        id={id}
        className={`rounded py-2 px-3 w-full form-input block outline-none ${styles.field}`}
        placeholder={placeholder}
        required={!!required}
        type={type}
      />
    </>
  )
}

export default function Form({ formFields }: FormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submit, submitting] = useFormspark({ formId: process.env.FORMSPARK_ID || "" });
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    submit(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`flex mt-7 mb-12 py-10 px-4 ${styles.successBox}`}
      >
        <h3
          className="text-3xl font-bold pb-1.5"
        >
          Thank you for submitting your message!
        </h3>
        <p>Someone from our team will reach out to you within 48 hours.</p>
      </div>
    )
  }

  return (
    <>
      <hr
        className={`inline-block w-full mt-5 mb-10 mx-auto border ${styles.seperator}`}
      />
      <form
        className={`flex items-center p-5 mb-10 ${styles.form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        {Array.isArray(formFields) &&
          formFields.map((field) => {
            const { inputType, _key, fieldId, placeholder, fieldName, required } = field ?? {};
            const { current } = fieldId ?? {};

            if (!inputType || !current) return null;

            if (inputType === "textArea") {
              return (
                <div key={_key}>
                  <label htmlFor={current}>{fieldName}</label>
                  <textarea
                    {...register(current)}
                    className={`rounded py-2 px-3 w-full form-textarea block outline-none ${styles.field}`}
                    aria-describedby="textarea"
                    id={current}
                    required={!!required}
                    placeholder={placeholder}
                  />
                </div>
              );
            }

            return (
              <InputField
                fieldName={fieldName}
                id={current}
                key={_key}
                placeholder={placeholder}
                register={register}
                required={required}
                type={inputType}
              />
            );
          })}
        <button
          className={`rounded px-8 w-fit h-11 ${styles.button}`}
          disabled={submitting}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  )
}
