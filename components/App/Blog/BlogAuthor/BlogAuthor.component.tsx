import Image from "next/image";
import { PortableText } from "@portabletext/react";
import React from "react";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import urlFor from "@/lib/urlFor";

import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute";

import styles from "./BlogAuthor.module.scss";

type Props = {
  displayDesktop: boolean;
  post: Post;
}

export default function BlogAuthor({ displayDesktop, post }: Props) {
  return (
    <div className={`relative ${styles.wrapper}`} data-desktop={displayDesktop}>
      <div className="relative h-32 w-32 mb-6">
        <Image
          alt={post.author.name}
          className="object-cover object-center rounded-full"
          height={128}
          src={
            urlFor(post.author.image).url()
          }
          width={128}
        />
      </div>
      <p className={`mb-4 ${styles.writtenText}`}>
        Written By
      </p>
      <p className="font-bold mb-6">{post.author.name}</p>
      <PortableText value={post.author.bio} />
      <ClientSideRoute
        className={`mt-5 font-bold flex items-center ${styles.button}`}
        route={`/author/${post.author.slug.current}`}
      >
        View Bio
        <ArrowUpRightIcon
          className={`ml-2 h-4 w-4 ${styles.icon}`}
        />
      </ClientSideRoute>
    </div>
  )
}
