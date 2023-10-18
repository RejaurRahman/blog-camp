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
      <h2 className={`font-bold pb-5 ${styles.title}`}>
        {post.title}
      </h2>
      <div className="flex">
        <div className="relative w-1/4 h-32 overflow-hidden">
          <Image
            alt={post.title}
            className="object-cover object-center group-hover:scale-150 duration-300 ease-out"
            fill
            src={
              urlFor(post.mainImage).url()
            }
          />
        </div>
        <div className="relative w-9/12 pl-5">
          <div className="flex items-center pb-4">
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
          <p className="line-clamp-2 text-gray-500">
            {post.description}
          </p>
          <p
            className="mt-4 font-bold flex items-center"
          >
            Read Post
            <ArrowUpRightIcon
              className="ml-2 h-4 w-4 group-hover:rotate-45 duration-300 ease-out"
            />
          </p>
        </div>
      </div>
    </div>
  )
}
