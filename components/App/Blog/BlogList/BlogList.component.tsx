"use client";

import React, { useEffect, useState } from "react";

import ArticlePost from "../ArticlePost/ArticlePost.component";
import FeaturedPost from "../FeaturedPost/FeaturedPost.component";
import ClientSideRoute from "../../ClientSideRoute/ClientSideRoute";

import styles from "./BlogList.module.scss"

type Props = {
  posts: Post[];
}

export default function BlogList({ posts }: Props) {
  const [visible, setVisible] = useState(4);

  const moreLoadedPosts = visible < posts.length;

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  }

  return (
    <div className={`w-full ${styles.wrapper}`}>
      <div
        className={`grid grid-cols-1 px-10 gap-10 gap-y-16 ${styles.grid}`}
      >
        {posts.slice(0, visible).map((post, index) => (
          <ClientSideRoute
            className={styles.articleLink}
            route={`/post/${post.slug.current}`}
            key={post._id}
          >
            {index === 0 ? (
              <FeaturedPost post={post} />
            ) : (
              <ArticlePost post={post} />
            )}
          </ClientSideRoute>
        ))}
        {moreLoadedPosts && (
          <div className="flex justify-center">
            <button
              className={`py-3 px-10 mt-4 w-fit font-bold ${styles.loadMore}`}
              onClick={showMoreItems}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
