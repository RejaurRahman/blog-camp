"use client";

import React, { useState } from "react";
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
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = async(data) => {
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data)
    }).then(() => {
      setSubmitted(true)
    }).catch((error) => {
      setSubmitted(false)
    })
  }

  return (
    <>
      <hr
        className={`my-5 mx-auto border border-yellow-500 ${styles.seperator}`}
      />
      {post.comments && post.comments.length > 0 && (
        <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2">
          <h3 className="text-4xl">Comments</h3>
          <hr className="pb-2" />
          {
            post.comments.map((comment: any) => (
              <div key={comment._id}>
                <p>
                  <span className="text-yellow-500">{comment.name}</span>
                  :{comment.comment}
                </p>
              </div>
            ))
          }
        </div>
      )}
      {
        submitted ? (
          <div
            className="flex flex-col py-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto"
          >
            <h3
              className="text-3xl font-bold"
            >
              Thank you for submitting your comment!
            </h3>
            <p>Once it has been approved, it will appear below!</p>
          </div>
        ) : (
          <>
            <h3
              className="text-3xl pt-7 pb-12"
            >
              Leave a comment below!
            </h3>
            <form
              className={`flex flex-col items-center p-5 mb-10 ${styles.form}`}
              onSubmit={handleSubmit(onSubmit)}
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
                    <span className="flex flex-col w-full pb-5 text-red-500">
                      * The Name Field is required
                    </span>
                  )
                }
                {
                  errors.email && (
                    <span className="flex flex-col w-full pb-5 text-red-500">
                      * The Email Field is required
                    </span>
                  )
                }
                {
                  errors.comment && (
                    <span className="flex flex-col w-full pb-5 text-red-500">
                      * The Comment Field is required
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
    </>
  )
}
