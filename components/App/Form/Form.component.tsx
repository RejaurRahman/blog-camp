"use client";

import { SubmitPayload } from "@formspark/use-formspark";
import React, { InputHTMLAttributes, useState } from "react";
import { FieldValues, SubmitHandler, UseFormRegister, useForm } from "react-hook-form";

import styles from "@/components/App/Blog/PostComments/PostComments.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  type?: string;
}

export function InputField({
  id,
  placeholder,
  register,
  required,
  type
}: InputFieldProps) {
  return (
    <input
      {...register(id)}
      aria-describedby={type}
      className={`rounded py-2 px-3 mb-5 w-full form-input block outline-none ${styles.field}`}
      id={id}
      placeholder={placeholder}
      required={!!required}
      type={type}
    />
  )
}

export default function Form({ formFields }: FormProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const FORMSPARK_ACTION_URL = "https://submit-form.com/xwHKYtXh7";

  const onSubmit: SubmitHandler<SubmitPayload> = async (data) => {
    setLoading(true);

    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        data
      })
    })
    setSubmitted(true);
    setLoading(false);
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
      <h3
        className="text-3xl pb-7"
      >
        {formFields?.heading}
      </h3>
      <p
        className="text-lg pb-12"
      >
        {formFields?.contactContent}
      </p>
      <form
        className={`flex items-center p-5 mb-10 ${styles.form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        {Array.isArray(formFields.formFields) &&
          formFields.formFields.map((field: FormFields) => {
            const {
              _key,
              fieldName,
              inputType,
              placeholder,
              required
            } = field ?? {};
            const current = fieldName ?? {};

            if (!inputType) return null;

            if (inputType == "textArea") {
              return (
                <div
                  className="w-full"
                  key={_key}
                >
                  <textarea
                    {...register(current)}
                    aria-describedby="textarea"
                    className={`rounded py-2 px-3 mb-5 w-full form-textarea block outline-none ${styles.field}`}
                    id={current}
                    required={!!required}
                    rows={8}
                    placeholder={placeholder}
                  />
                </div>
              )
            }

            return (
              <InputField
                aria-describedby={inputType}
                fieldName={fieldName}
                id={current}
                key={_key}
                placeholder={placeholder}
                register={register}
                required={required}
                type={inputType}
              />
            )
          })}
        <button
          className={`rounded px-8 w-fit h-11 ${styles.button}`}
          disabled={loading}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  )
}
