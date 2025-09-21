// LogoShowcase.jsx
import React from "react";
import { Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import pts from "../../assets/clints/PTS.png"
import cleanso from "../../assets/clints/Cleanso.png"
import vaseegrah from "../../assets/clints/vaseegrah.webp"


const LogoShowcase = ({ theme = "light" }) => {
  const { t } = useTranslation();

  const logos = [
    pts,
    cleanso,
    vaseegrah,
    pts,
    cleanso,
    vaseegrah,
  ];

  const TopSection = () => (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
      <div className="text-center">
        <div className="text-[#0366e0] flex gap-2 justify-center items-center">
          <FontAwesomeIcon icon={faMeta} fontSize={40} />
          <h1 className={`font-bold text-2xl ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>Meta</h1>
        </div>
        <span className={`font-normal ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>Tech Provider</span>
      </div>

      <div className={`flex items-center gap-2 ${theme === "light" ? "bg-gray-100 border-gray-200" : "bg-gray-900 border-gray-800"} px-4 py-2 rounded-lg shadow-lg border`}>
        <div className={`text-2xl font-bold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>4.7/5</div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <Star key={i} size={16} className={`text-orange-400 fill-orange-400 ${i === 5 ? "opacity-70" : ""}`} />
          ))}
        </div>
        <div className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-400"} uppercase font-semibold tracking-wider`}>Rating on G2</div>
      </div>
    </div>
  );

  return (
    <div className={`py-16 overflow-hidden ${theme === "light" ? "bg-gray-50" : "bg-black"} mb-4 my-2.5`}>
      {/* Heading */}
      <div className="container mx-auto mb-12 px-4 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold ${theme === "light" ? "text-gray-800" : "text-gray-200"} mb-1`}>
          {t ? t("Homepage.logoShowcase.title") : "Logo Showcase"}
        </h2>
      </div>

      <TopSection />

      {/* Inline CSS for reliable animation (no Tailwind config changes needed) */}
      <style>{`
        /* marquee container - add horizontal padding so it isn't full-width */
        .lv-marquee {
          overflow: hidden;
          // padding: 0 6rem;

        }

        /* track that will scroll left; duplicated content ensures no gap */
        .lv-track {
          display: flex;
          gap: 2.5rem; /* spacing between logos */
          align-items: center;
          /* keep items unshrinkable so spacing and sizes remain fixed */
        }
        .lv-track > .lv-item {
          flex: 0 0 auto;
        }
        .lv-item img {
          height: 70px; 
          width: 170px;
          display: block;
        }

        /* animation: moves the entire track left by 50% of the track width (i.e. one copy length) */
        .lv-animated {
          animation: lv-scroll 18s linear infinite;
          will-change: transform;
        }

        /* pause when hovered (nice UX) */
        .lv-animated:hover {
          animation-play-state: paused;
        }

        @keyframes lv-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-90%); }
        }
      `}</style>

      {/* Marquee area */}
      <div className="lv-marquee px-1.5 mx-5 md:px-20 md:mx-32">
        {/* Duplicate logos sequence by concatenating the array to itself */}
        <div className="lv-animated" aria-hidden="false">
          <div className="lv-track">
            {logos.concat(logos).map((src, idx) => (
              <div className="lv-item" key={idx}>
                <img src={src} alt={`logo-${idx}`} className="md:h-[70px] md:w-[170px] " />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Powered By */}
      {/* <div className="flex gap-2.5 justify-center align-middle items-center mt-10">
        <p className={`text-lg font-semibold mb-3 ${theme === "light" ? "text-gray-800" : "text-gray-300"}`}>
          Brands Powered by 
        </p>
        <img src={vaseegrah} alt="TechVaseegrah Logo" className="h-14 w-auto" />
      </div> */}
    </div>
  );
};

export default LogoShowcase;
