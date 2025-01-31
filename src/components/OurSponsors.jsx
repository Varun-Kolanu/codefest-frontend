import React from "react";
import ixigo from "../assets/Sponsors/ixigo.jpeg";
import darkHorse from "../assets/Sponsors/project-dark-horse.jpeg";
import winzo from "../assets/Sponsors/winzo.png"
import stockedge from "../assets/Sponsors/stockedge.png"
import lwt from "../assets/Sponsors/learnwt.png"

const SponsorLogo = ({ src, alt ,href }) => (
  
  <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] relative">
    <a href={href || "#"}
  {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})} >
    <img
      src="/previousSponsorsBox.svg"
      alt=""
      className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] absolute z-[2]"
    />
   
    <div className="bg-white rounded-full absolute w-[125px] h-[125px] md:w-[249px] md:h-[249px] top-[13px] left-[13px] md:top-[25px] md:left-[25px] overflow-hidden flex items-center justify-center">
    
      <img
          src={src}
          alt=""
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
        />

    </div>
    </a>
  </div>
);

const PreviousSponsors = () => {
  const sponsors = [
    { src: ixigo, alt: "IXIGO logo", href: "https://www.ixigo.com/"  },
    { src: darkHorse, alt: "DARKHORSE logo" },
    { src: winzo , alt: "Winzo logo", href: "https://www.winzogames.com/"},
    { src: lwt , alt: "ltw logo"},
    { src: stockedge , alt: "stockedge logo"},
  ];

  return (
    <div className="p-6 mb-10">
      {/* <div className="w-fit mb-10">
        <img
          src="/previousSponsors.png"
          alt=""
          className="h-[150px] object-contain"
        />
      </div> */}
      <div className="relative m-10">
        <div className="text-5xl md:text-7xl p-10 relative text-white z-[1]">
          OUR SPONSORS
        </div>
        <div className="text-5xl md:text-7xl p-10 absolute top-0 translate-x-[-3px] translate-y-[-3px] z-[0.5] text-gray-500">
          OUR SPONSORS
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {sponsors.map((sponsor, index) => (
          <SponsorLogo key={index} src={sponsor.src} alt={sponsor.alt} href={sponsor.href} />
        ))}
      </div>
    </div>
  );
};

export default PreviousSponsors;
