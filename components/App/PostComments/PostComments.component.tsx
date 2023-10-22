"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"

import styles from "./PostComments.module.scss";

interface FormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

export default function PostComments({ post }: Props) {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<FormInput>()

  return (
    <>
      <hr
        className={`my-5 mx-auto border border-yellow-500 ${styles.seperator}`}
      />
      <h3
        className="text-3xl pt-7 pb-12"
      >
        Leave a comment below!
      </h3>
      <form
        className={`flex flex-col items-center p-5 mb-10 ${styles.form}`}
      >
        <input
          {...register("_id")}
          type="hidden"
          name="_id"
          value={post._id}
        />
        <>
          {
            errors.name && (
              <span className="flex flex-col p-5 text-red-500">
                - The Name Field is required
              </span>
            )
          }
          {
            errors.comment && (
              <span className="flex flex-col p-5 text-red-500">
                - The Comment Field is required
              </span>
            )
          }
          {
            errors.email && (
              <span className="flex flex-col p-5 text-red-500">
                - The Email Field is required
              </span>
            )
          }
        </>
        <label className="block mb-5 w-full">
          <input
            {...register("name", { required: true })}
            className={`rounded py-2 px-3 w-full form-input block outline-none ${styles.field}`}
            placeholder="Your name"
            type="text"
          />
        </label>
        <label className="block mb-5 w-full">
          <input
            {...register("email", { required: true })}
            className={`rounded py-2 px-3 w-full form-input block outline-none ${styles.field}`}
            placeholder="Your chosen email address"
            type="email"
          />
        </label>
        <label className="block mb-5 w-full">
          <textarea
            {...register("comment", { required: true })}
            className={`rounded py-2 px-3 w-full form-textarea block outline-none ${styles.field}`}
            placeholder="Add your comment here"
            rows={8}
          />
        </label>
        <button
          className={`rounded px-8 w-fit h-11 ${styles.button}`}
        >
          Send Message
        </button>
      </form>
    </>
  )
}
