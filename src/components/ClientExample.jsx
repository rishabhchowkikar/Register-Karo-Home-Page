import React from "react";
import Coinbase from "../assets/coinbase.png";
import Dropbox from "../assets/dropbox.png";
import Slack from "../assets/slack.png";
import Spotify from "../assets/spotify.png";
import Webflow from "../assets/webflow.png";
import Zoom from "../assets/zoom.png";

const ClientExample = () => {
  const companies = [
    { name: "Coinbase", logo: Coinbase },
    { name: "Spotify", logo: Spotify },
    { name: "Slack", logo: Slack },
    { name: "Dropbox", logo: Dropbox },
    { name: "Webflow", logo: Webflow },
    { name: "Zoom", logo: Zoom },
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="w-full flex justify-center items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img
                draggable={false}
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientExample;
