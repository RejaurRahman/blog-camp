import React from "react";

import styles from "./PostComments.module.scss";

export default function PostComments() {
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
        className={`flex flex-col p-5 mb-10 ${styles.form}`}
      >
        <label className="block mb-5">
          <input
            className={`rounded py-2 px-3 form-input block w-full outline-none ${styles.field}`}
            placeholder="Your name"
            type="text"
          />
        </label>
        <label className="block mb-5">
          <input
            className={`rounded py-2 px-3 form-input block w-full outline-none ${styles.field}`}
            placeholder="Your chosen email address"
            type="email"
          />
        </label>
        <label className="block mb-5">
          <textarea
            className={`rounded py-2 px-3 form-textarea block w-full outline-none ${styles.field}`}
            placeholder="Add your comment here"
            rows={8}
          />
        </label>
      </form>
    </>
  )
}
