import {
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const SocialSidebar = () => {
  return (
    <>
      <div className="fixed right-[-1] top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col">
        <a
          href="https://www.facebook.com/share/1Ay79xHcfi/"
          className="bg-[#1877F2] p-3 lg:p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-white text-sm lg:text-xl" />
        </a>

        <a
          href="https://x.com/iGASummit?t=N8kO_9qtwaBu3YeUUaBQNA&s=09"
          className="bg-black p-3 lg:p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="text-white text-sm lg:text-xl" />
        </a>

        <a
          href="https://www.instagram.com/igasummit?igsh=MXF6YXdpYXRxdzBoaQ=="
          className="bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-3 lg:p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white text-sm lg:text-xl" />
        </a>

        <a
          href="https://www.linkedin.com/company/igasummit/"
          className="bg-[#0A66C2] p-3 lg:p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-sm lg:text-xl" />
        </a>

        <a
          href="https://www.youtube.com/@iGASummit"
          className="bg-[#FF0000] p-3 lg:p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-white text-sm lg:text-xl" />
        </a>

        <a
          href="https://open.spotify.com/show/11m2XkXyP3MmjHRgXEVgwx?si=8cb7aaae5d2a47bc"
          className="bg-[#1DB954] p-3 lg:p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify className="text-white text-sm lg:text-xl" />
        </a>

        <a
          href="https://t.me/@igaminginafrica"
          className="bg-[#229ED9] p-3 lg:p-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="text-white text-sm lg:text-xl" />
        </a>
      </div>
      <div className="fixed left-5 bottom-5 z-50 flex">
        <a
          href="https://wa.me/254782828237"
          className="bg-[#25D366] p-3 lg:p-3.5 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-white text-2xl lg:text-4xl" />
        </a>
      </div>
    </>
  );
};

export default SocialSidebar;
