"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import React, { useState } from "react";

import HeaderLeft from "@/components/App/Layout/HeaderLeft/HeaderLeft.component";
import HeaderLogo from "@/components/App/Layout/HeaderLogo/HeaderLogo.component";
import HeaderSocial from "@/components/App/Layout/HeaderSocial/HeaderSocial.component";

import styles from "./HeaderModal.module.scss";

interface Props {
  data?: SiteData;
}

export default function HeaderModal({ data }: Props) {
  const [open, setOpen] = useState(false);

  const openChange = () => {
    setOpen(!open)
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={openChange}
    >
      <Dialog.Trigger asChild>
        <button
          className={`flex items-center ${styles.burgerMenu}`}
        >
          <span
            className={`flex relative mx-auto h-5 ${styles.menuIcon}`}
          >
            <span className="absolute top-1/2 h-0.5" />
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed top-0 h-screen w-full ${styles.overlay}`}
        />
        <Dialog.Content
          className={`fixed flex top-0 left-0 h-screen ${styles.content}`}
        >
          <div className={styles.left}>
            <HeaderLeft data={data} />
          </div>
          <div className={styles.right}>
            <HeaderLogo />
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                className={`flex items-center ${styles.burgerMenu}`}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
                  className={`flex relative mx-auto h-9 w-10 ${styles.menuIcon}`}
                />
              </button>
            </Dialog.Close>
            <HeaderSocial data={data?.socialLinks} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
