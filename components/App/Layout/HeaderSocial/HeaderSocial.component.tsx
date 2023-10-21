import React from "react";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

config.autoAddCss = false;

import SocialIcon from "./SocialIcon/SocialIcon.component";

export default function HeaderSocial() {
  return (
    <ul>
      <SocialIcon
        url="https://www.facebook.com/"
      >
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
      </SocialIcon>
      <SocialIcon
        url="https://uk.linkedin.com/"
      >
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </SocialIcon>
      <SocialIcon
        url="https://www.pinterest.co.uk/"
      >
        <FontAwesomeIcon icon={["fab", "pinterest"]} />
      </SocialIcon>
      <SocialIcon
        url="https://www.reddit.com/"
      >
        <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
      </SocialIcon>
      <SocialIcon
        url="https://twitter.com/"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </SocialIcon>
    </ul>
  )
}
