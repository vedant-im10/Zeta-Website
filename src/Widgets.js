import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Trending News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Great team creats Web App", "Trending news - 5555 readers")}
      {newsArticle("PDPU renamed to PDEU", "Education - 1590 readers")}
      {newsArticle("RCB wins IPL 2022", "Health - 3400 readers")}
      {newsArticle("Neymar wins Ballon d'Or", "Sports - 5143 readers")}
      {newsArticle("Virat Kohli gets a hundred 100's", "Sports - 1987 readers")}
      {newsArticle("Elon Musk colonizes Mars", "Trending news - 2975 readers")}
    </div>
  );
}

export default Widgets;
