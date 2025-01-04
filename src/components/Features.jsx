import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from "./BentoTilt";
import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className=" flex-1 justify-items-center px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Meet the Team
          </p>
          <p className="max-w-md text-center font-circular-web text-lg text-blue-50 opacity-50">
            PRimordialS was created to give people from all over the world a
            platform to do what they love. We help people achieve their goals of
            playing competitively while being YouTubers/Streamers
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/plane.mp4"
            title={
              <>
                Ab<b>ove A</b>ll
              </>
            }
            description="I played games when I was 7 years old and now I want to get other people to play games as well. All I want is to make gaming mainstream in India"
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Thr<b>ott</b>l
                </>
              }
              description="The Founder And Owner Of Primordials. The voice and Face of this server as well."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  su<b>perio</b>r
                </>
              }
              description="A gamer and an experienced Apex Player as well. He is the co-owner And very shy."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  bana<b>nama</b>n
                </>
              }
              description="A musician by heart. He Plays Sitar, Guitar, and other Instruments. You will see him mostly playing Single Player games."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="videos/hero-4.mp4"
              title={
                <>
                  Ig<b>neel Fros</b>t
                </>
              }
              description="A musician by heart. He Plays Sitar, Guitar, and other Instruments. You will see him mostly playing Single Player games."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="videos/hero-4.mp4"
              title={
                <>
                  My<b>Devils He</b>LL
                </>
              }
              description="An iOS Developer who can answer and solve all your technical Queries. He plays games seldomly when he gets time after work."
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
