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
      className={`flex group cursor-pointer ${styles.card}`}
    >
      <h2 className={`font-bold pb-5 ${styles.title}`}>
        {post.title}
      </h2>
      <div className={`flex ${styles.cardWrapper}`}>
        <div
          className={`relative h-32 overflow-hidden ${styles.imageWrapper}`}
        >
          <Image
            alt={post.title}
            className="object-cover object-center group-hover:scale-150 duration-300 ease-out h-full w-full"
            height={128}
            src={
              urlFor(post.mainImage).url()
            }
            width={245}
          />
        </div>
        <div
          className={`relative ${styles.cardContent}`}
        >
          <div
            className={`flex items-center pb-4 ${styles.contentWrapper}`}
          >
            <div
              className={`flex md:flex-row gap-y-2 md:gap-x-2 items-center ${styles.innerWrapper}`}
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
              className={`uppercase relative ${blogListStyles.date}`}
            >
              <span className={blogListStyles.dateWrapper}>
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
