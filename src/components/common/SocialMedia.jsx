import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";
const SocialMedia = () => {
  const { data } = useGlobalContext();
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {data?.social_media_links?.facebook ? (
        <a
          className="flex items-center justify-center bg-white w-7 h-7 rounded-[50%] text-mainColor"
          rel="noreferrer"
          target="_blank"
          href={data?.social_media_links?.facebook}
        >
          <FaFacebook size={20} />
        </a>
      ) : null}
      {data?.social_media_links?.linkedin ? (
        <a
          className="flex items-center justify-center bg-white w-7 h-7 rounded-[50%] text-mainColor"
          rel="noreferrer"
          target="_blank"
          href={data?.social_media_links?.linkedin}
        >
          <FaLinkedin size={20} />
        </a>
      ) : null}
      {data?.social_media_links?.instagram ? (
        <a
          className="flex items-center justify-center bg-white w-7 h-7 rounded-[50%] text-mainColor"
          rel="noreferrer"
          target="_blank"
          href={data?.social_media_links?.instagram}
        >
          <FaInstagram size={20} />
        </a>
      ) : null}
      {data?.social_media_links?.twitter ? (
        <a
          className="flex items-center justify-center bg-white w-7 h-7 rounded-[50%] text-mainColor"
          rel="noreferrer"
          target="_blank"
          href={data?.social_media_links?.twitter}
        >
          <FaTwitter size={20} />
        </a>
      ) : null}
      {data?.social_media_links?.tiktok ? (
        <a
          className="flex items-center justify-center bg-white w-7 h-7 rounded-[50%] text-mainColor"
          rel="noreferrer"
          target="_blank"
          href={data?.social_media_links?.tiktok}
        >
          <FaTiktok size={20} />
        </a>
      ) : null}
    </div>
  );
};

export default SocialMedia;
