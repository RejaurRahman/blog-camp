"use client";

import React, { useCallback, useEffect, useState } from "react";

import { ClockIcon } from "@heroicons/react/24/outline";

import Breadcrumbs from "@/components/App/Blog/Breadcrumbs/Breadcrumbs.component";
import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute";

import blogListStyles from "../BlogList/BlogList.module.scss";
import styles from "./BlogHeader.module.scss";

type Props = {
  post: Post;
}

export default function BlogHeader({ post }: Props) {
  const [calculateWords, setCalculateWords] = useState(0);

  const wordCalculate = useCallback(() => {
    let numberOfWords = 0;
    const averageWPM = 190;

    const words = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
    words.forEach((word) => {
      numberOfWords += word.innerHTML.trim().split(" ").length;
    });

    const readTime = Math.ceil(numberOfWords / averageWPM);
    setCalculateWords(readTime);
  }, []);

  useEffect(() => {
    wordCalculate();
  }, [calculateWords, wordCalculate]);

  return (
    <div className={`flex ${styles.wrapper}`}>
      <Breadcrumbs pageTitle={post.title} />
      <div
        className={`flex items-center pb-7 ${styles.contentWrapper}`}
      >
        <div
          className={`flex md:flex-row gap-y-2 md:gap-x-2 items-center ${styles.innerWrapper}`}
        >
          {
            post.categories?.map((category) => (
              <ClientSideRoute
                className="bg-[#FFCC00] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                route={`/category/${category.slug.current}`}
                key={category._id}
              >
                {category.title}
              </ClientSideRoute>
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
        <span className={`relative ${styles.readTime}`}>
          <span className={`flex items-center ${styles.readTimeText}`}>
            <ClockIcon />
            {calculateWords} min read
          </span>
        </span>
      </div>
      {
        post.tags && post.tags.length > 0 && (
          <div className={`flex pb-7 ${styles.tags}`}>
            <ul className="flex flex-wrap">
              {
                post.tags?.map((tag) => (
                  <li
                    className={`py-2 px-4 mt-4 rounded-full ${styles.tagItem}`}
                    key={tag._id}
                  >
                    {tag.title}
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
      <h1 className={`font-bold pb-5 ${styles.title}`}>
        {post.title}
      </h1>
      <div className="mt-5 flex-1">
        <p className={`text-gray-500 ${styles.description}`}>
          {post.description}
        </p>
      </div>
    </div>
  )
}
