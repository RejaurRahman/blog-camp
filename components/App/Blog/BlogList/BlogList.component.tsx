import Image from "next/image";
import React from "react";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import urlFor from "@/lib/urlFor";

type Props = {
  posts: Post[];
}

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24"
      >
        {posts.map((post) => (
          <div
            className="flex flex-col group cursor-pointer"
            key={post._id}
          >
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                alt={post.title}
                className="object-cover object-center"
                fill
                src={
                  urlFor(post.mainImage).url()
                }
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {
                      new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })
                    }
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
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
              </div>
            </div>
            <div className="mt-5 flex-1">
              <p className="underline text-lg font-bold">
                {post.title}
              </p>
              <p className="line-clamp-2 text-gray-500">
                {post.description}
              </p>
            </div>
            <p
              className="mt-5 font-bold flex items-center group-hover:underline"
            >
              Read Post
              <ArrowUpRightIcon
                className="ml-2 h-4 w-4"
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
