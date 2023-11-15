import Image from "next/image";
import React from "react";

import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

import Logo from "@/assets/images/logo.png";

import styles from "./not-found.module.scss";

export const revalidate = 30;

export default function NotFound() {
  return (
    <div className={`flex mx-auto items-center justify-center ${styles.container}`}>
      <ClientSideRoute
        route="/"
      >
        <Image
          alt="Blog Camp"
          height={96}
          src={Logo}
          width={96}
        />
      </ClientSideRoute>
      <h1
        className={`text-center ${styles.heading}`}
      >
        404
      </h1>
      <p
        className={`text-center ${styles.text}`}
      >
        You didn&apos;t break the internet, but we can&apos;t find what you are looking for.
      </p>
      <div className={`flex ${styles.buttonWrapper}`}>
        <ClientSideRoute
          className={`mt-5 p-3 flex items-center justify-center rounded-full ${styles.button}`}
          route="/"
        >
          Visit Homepage
          <ArrowUpRightIcon
            className={`ml-2 h-4 w-4 ${styles.icon}`}
          />
        </ClientSideRoute>
        <ClientSideRoute
          className={`mt-5 p-3 flex items-center justify-center rounded-full ${styles.button}`}
          route="/studio"
        >
          Visit Studio
          <ArrowUpRightIcon
            className={`ml-2 h-4 w-4 ${styles.icon}`}
          />
        </ClientSideRoute>
      </div>
    </div>
  )
}
