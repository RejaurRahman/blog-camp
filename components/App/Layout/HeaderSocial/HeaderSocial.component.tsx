import React from "react";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

config.autoAddCss = false;

import SocialIcon from "./SocialIcon/SocialIcon.component";

interface Props {
  data?: SocialLinks;
}

export default function HeaderSocial({ data }: Props) {
  return data?.fbLink || data?.linkedinLink || data?.pinterestLink || data?.redditLink || data?.twitterLink ? (
    <ul>
      {data?.fbLink && (
        <SocialIcon
          url={data?.fbLink}
        >
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </SocialIcon>
      )}
      {data?.linkedinLink && (
        <SocialIcon
          url={data?.linkedinLink}
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </SocialIcon>
      )}
      {data?.pinterestLink && (
        <SocialIcon
          url={data?.pinterestLink}
        >
          <FontAwesomeIcon icon={["fab", "pinterest"]} />
        </SocialIcon>
      )}
      {data?.redditLink && (
        <SocialIcon
          url={data?.redditLink}
        >
          <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
        </SocialIcon>
      )}
      {data?.twitterLink && (
        <SocialIcon
        url={data?.twitterLink}
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </SocialIcon>
      )}
    </ul>
  ) : null
}
