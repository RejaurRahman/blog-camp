"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

import HeaderLogo from "../HeaderLogo/HeaderLogo.component";

import styles from "./HeaderModal.module.scss";

export default function HeaderModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={`w-24 h-24 flex items-center ${styles.burgerMenu}`}
        >
          <span
            className={`flex relative mx-auto h-5 w-11 ${styles.menuIcon}`}
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
          className={`absolute top-0 left-0 w-24 h-screen ${styles.headerBar}`}
        >
          <HeaderLogo />
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className={`w-24 h-24 flex items-center ${styles.burgerMenu}`}
            >
              <span
                className={`flex relative mx-auto h-9 w-10 ${styles.menuIcon}`}
              />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
