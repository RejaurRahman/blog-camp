"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./PostComments.module.scss";

interface FormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post,
  comments: Comment[]
}

export default function PostComments({ post, comments }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const {
    formState: {errors},
    getValues,
    handleSubmit,
    register,
    setValue
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = async(data) => {
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.SANITY_API_TOKEN}`
      }
    }).then(() => {
      setSubmitted(true)
    }).catch(() => {
      setSubmitted(false)
    })
  }

  return (
    <>
      <hr
        className={`inline-block w-full mt-5 mb-10 mx-auto border ${styles.seperator}`}
      />
      {comments && comments.length > 0 && (
        <>
          <div className={`space-y-4 ${styles.comments}`}>
            <h3
              className="text-4xl font-bold mb-10"
            >
              {comments.length} Comment{comments.length > 1 ? "s" : null}
            </h3>
            {comments.map((comment, index) => (
              <div
                className={`p-4 ${styles.commentBox}`}
                key={index + 1}
              >
                <h4 className={`font-bold mb-2 ${styles.authorName}`}>
                  {comment.name}
                </h4>
                <p
                  className={`mb-3 ${styles.comment}`}
                  dangerouslySetInnerHTML={{ __html: comment.comment }}
                />
                <span className={`capitalize italic ${styles.dateWrapper}`}>
                  {
                    new Date(comment.publishedAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })
                  }
                </span>
              </div>
            ))}
          </div>
          <hr
            className={`inline-block w-full mt-12 mx-auto border ${styles.seperator}`}
          />
        </>
      )}
      {
        submitted ? (
          <div
            className={`flex mt-7 mb-12 py-10 px-4 ${styles.successBox}`}
          >
            <h3
              className="text-3xl font-bold pb-1.5"
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
              className={`flex items-center p-5 mb-10 ${styles.form}`}
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
                    <span
                      className={`flex w-full pb-5 text-red-500 ${styles.error}`}
                    >
                      * The Name Field is required
                    </span>
                  )
                }
                {
                  errors.email && (
                    <span
                      className={`flex w-full pb-5 text-red-500 ${styles.error}`}
                    >
                      * The Email Field is required
                    </span>
                  )
                }
                {
                  errors.comment && (
                    <span
                      className={`flex w-full pb-5 text-red-500 ${styles.error}`}
                    >
                      * The Comment Field is required
                    </span>
                  )
                }
              </>
              <label className="block mb-5 w-full">
                <input
                  {...register("name", { required: true })}
                  className={`rounded py-2 px-3 w-full form-input block outline-none ${styles.field}`}
                  onChange={(e)=>{
                    setValue("name", e.target.value)
                  }}
                  placeholder="Your name"
                  type="text"
                  value={getValues("name")}
                />
              </label>
              <label className="block mb-5 w-full">
                <input
                  {...register("email", { required: true })}
                  className={`rounded py-2 px-3 w-full form-input block outline-none ${styles.field}`}
                  onChange={(e)=>{
                    setValue("email", e.target.value)
                  }}
                  placeholder="Your chosen email address"
                  type="email"
                  value={getValues("email")}
                />
              </label>
              <label className="block mb-5 w-full">
                <textarea
                  {...register("comment", { required: true })}
                  className={`rounded py-2 px-3 w-full form-textarea block outline-none ${styles.field}`}
                  onChange={(e)=>{
                    setValue("comment", e.target.value)
                  }}
                  placeholder="Add your comment here"
                  rows={8}
                  value={getValues("comment")}
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
