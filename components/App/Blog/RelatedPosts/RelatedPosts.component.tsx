import React from "react";

import ArticlePost from "@/components/App/Blog/ArticlePost/ArticlePost.component";
import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute";

import styles from "./RelatedPosts.module.scss";


interface Props {
  relatedPosts: Post[]
}

export default function RelatedPosts({ relatedPosts }: Props) {
  return (
    <>
      {relatedPosts.length > 0 && (
        <>
          <hr
            className={`inline-block my-14 border ${styles.seperator}`}
          />
          <h2
            className={`text-5xl pb-10 font-bold w-full text-center ${styles.heading}`}
          >
            Related Posts
          </h2>
          <div
            className={`flex flex-wrap ${styles.cardWrapper}`}
          >
            {relatedPosts.map((post: Post, index: number) => (
              <ClientSideRoute
                className={styles.articleLink}
                route={`/post/${post.slug.current}`}
                key={index + 1}
              >
                <ArticlePost
                  post={post}
                />
              </ClientSideRoute>
            ))}
          </div>
        </>
      )}
    </>
  );
}
