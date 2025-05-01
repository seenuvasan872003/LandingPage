 
/* eslint-disable no-unused-vars */
import { ReactLenis } from "@studio-freight/react-lenis";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef,useState } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-black">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};


const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://sdmntprwestus.oaiusercontent.com/files/00000000-7288-6230-8a7c-27bf3a6a7c0a/raw?se=2025-05-01T17%3A46%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=61849ae1-d8e3-5928-be09-01b607880396&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-01T03%3A45%3A05Z&ske=2025-05-02T03%3A45%3A05Z&sks=b&skv=2024-08-04&sig=cwfgdYfZjn6YGcWTqnBiAszfZy3zy4FHI9txOivgTOE%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://i.ibb.co/PG8PD5xh/edd5fd7c-3a3e-421e-a3e1-bb2def885ee3.jpg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://i.ibb.co/sdRcKzX1/c872f192-f36f-4038-98ac-13708e49957d.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://i.ibb.co/r2Y5v2Fx/4774b70e-95b6-4320-98a8-3e2316dae6f9.jpg"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://i.ibb.co/1fktdKJf/bb52bd94-3f89-48df-bc0c-fc64999a4955.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const ScheduleItem = ({ title, imageUrl }) => {
  const [showImage, setShowImage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    // Get position relative to the viewport
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };
  
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 px-6 py-4 bg-black relative border-t border-b border-white"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="w-full">
        <p className="text-xl font-medium text-white text-center py-2">{title}</p>
      </div>
      
      {showImage && (
        <div 
          className="fixed rounded shadow-lg z-10"
          style={{ 
            left: `${mousePosition.x + 15}px`, 
            top: `${mousePosition.y + 15}px` 
          }}
        >
          <img 
            src={imageUrl} 
            alt={`${title} preview`} 
            className="w-64 h-48 rounded" 
          />
        </div>
      )}
    </motion.div>
  );
};

const Schedule = () => {
  return (
    <section
      id="api-schedule"
      className="mx-auto max-w-5xl px-4 py-48 bg-black"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        WhatsApp API Features
      </motion.h1>
      <ScheduleItem 
        title="Green Tick Verification" 
        imageUrl="/api/placeholder/240/160"
      />
      <ScheduleItem 
        title="Create Your Own Flow" 
        imageUrl="/api/placeholder/240/160"
      />
      <ScheduleItem 
        title="Custom Tags Creation" 
        imageUrl="/api/placeholder/240/160"
      />
      <ScheduleItem 
        title="Quick Responses" 
        imageUrl="/api/placeholder/240/160"
      />
      <ScheduleItem 
        title="Welcome Messages" 
        imageUrl="/api/placeholder/240/160"
      />
    </section>
  );
};