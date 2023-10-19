import React from "react";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.component";

import blogListStyles from "../BlogList/BlogList.module.scss";
import styles from "./BlogHeader.module.scss";

type Props = {
  post: Post;
}

export default function BlogHeader({ post }: Props) {
  return (
    <>
      <Breadcrumbs pageTitle={post.title} />
      <div className="flex items-center pb-7">
        <div
          className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center"
        >
          {
            post.categories?.map((category) => (
              <div
                className="bg-[#FFCC00] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                key={category._id}
              >
                <p>{category.title}</p>
              </div>
            ))
          }
        </div>
        <p
          className={`uppercase relative ml-2.5 ${blogListStyles.date}`}
        >
          <span className="ml-4">
            {
              new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            }
          </span>
        </p>
      </div>
      <h1 className={`font-bold pb-5 ${styles.title}`}>
        {post.title}
      </h1>
      <div className="mt-5 flex-1">
        <p className={`text-gray-500 ${styles.description}`}>
          {post.description}
        </p>
      </div>
    </>
  )
}
