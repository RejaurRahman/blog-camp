import React from "react";

import ArticlePost from "../ArticlePost/ArticlePost.component";
import FeaturedPost from "../FeaturedPost/FeaturedPost.component";
import ClientSideRoute from "../../ClientSideRoute/ClientSideRoute";

import styles from "./BlogList.module.scss"

type Props = {
  posts: Post[];
}

export default function BlogList({ posts }: Props) {
  return (
    <div className="w-full pt-24">
      <div
        className={`grid grid-cols-1 px-10 gap-10 gap-y-16 pb-24 ${styles.grid}`}
      >
        {posts.map((post, index) => (
          <ClientSideRoute
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
      </div>
    </div>
  )
}
