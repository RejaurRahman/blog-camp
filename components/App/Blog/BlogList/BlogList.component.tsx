"use client";

import React, { useState } from "react";

import ArticlePost from "@/components/App/Blog/ArticlePost/ArticlePost.component";
import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute";
import FeaturedPost from "@/components/App/Blog/FeaturedPost/FeaturedPost.component";

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
        className={`flex px-10 gap-10 gap-y-16 ${styles.grid}`}
      >
        {posts.slice(0, visible).map((post, index) => (
          <ClientSideRoute
            className={styles.articleLink}
            key={post._id}
            route={`/post/${post.slug.current}`}
          >
            {index === 0 ? (
              <FeaturedPost post={post} />
            ) : (
              <ArticlePost post={post} />
            )}
          </ClientSideRoute>
        ))}
        {moreLoadedPosts && (
          <div className={`flex justify-center ${styles.loadWrapper}`}>
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
