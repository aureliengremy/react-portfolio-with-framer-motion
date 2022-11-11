import React from "react";

const SocialMediaIcons = () => {
  const socialLinks = {
    github: "https://github.com/aureliengremy",
    linkedin: "https://www.linkedin.com/in/aureliengremy",
    twitter: "https://twitter.com/AurelGy",
    codepen: "https://codepen.io/OrL",
    dev: "https://dev.to/iamorl",
  };

  const socialIcon = (rs) => {
    switch (rs) {
      case "github":
        return <img src="../assets/icons-github.png" className="w-8" alt="github-icone" />;
      case "linkedin":
        return <img src="../assets/icons-linkedin.png" className="w-8" alt="linkedin-icone" />;
      case "twitter":
        return <img src="../assets/icons-twitter.png" className="w-8" alt="twitter-icone" />;
      case "codepen":
        return <img src="../assets/icons-codepen.png" className="w-8" alt="codepen-icone" />;
      case "dev":
        return <img src="../assets/icons-dev.png" className="w-8" alt="dev-icone" />;
      default:
        return "";
    }
  };

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {Object.entries(socialLinks).map(([key, value]) => {
        return (
          <a
            key={key}
            href={value}
            className="hover:opacity-50 transition duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialIcon(key)}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
