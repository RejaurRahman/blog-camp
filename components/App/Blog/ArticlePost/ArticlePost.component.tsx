import Image from "next/image";
import React from "react";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import urlFor from "@/lib/urlFor";

import blogListStyles from "../BlogList/BlogList.module.scss";
import styles from "./ArticlePost.module.scss";

type Props = {
  post: Post;
}

export default function ArticlePost({ post }: Props) {
  return (
    <div
      className="flex flex-col group cursor-pointer"
    >
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
      <h2 className={`font-bold pb-5 ${styles.title}`}>
        {post.title}
      </h2>
      <div className="relative w-full h-80">
        <Image
          alt={post.title}
          className="object-cover object-center"
          fill
          src={
            urlFor(post.mainImage).url()
          }
        />
      </div>
      <div className="mt-5 flex-1">
        <p className="line-clamp-2 text-gray-500">
          {post.description}
        </p>
      </div>
      <p
        className="mt-5 font-bold flex items-center"
      >
        Read Post
        <ArrowUpRightIcon
          className="ml-2 h-4 w-4"
        />
      </p>
    </div>
  )
}
