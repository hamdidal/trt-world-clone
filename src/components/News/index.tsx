import { FC } from "react";
import { NewsProps } from "./types";
import "./News.css";
import { Avatar } from "@mui/material";

const News: FC<NewsProps> = ({ img, title, content, author, smaller }) => {
  return (
    <div className="news">
      <div className="news__image">
        <img className="news__image__img" src={img} alt={""} loading="lazy" />
      </div>
      <div className="news_content">
        <p className="news__title">{title?.slice(0, 60)}</p>
        <p className="news__content">{content?.slice(0, 40)}</p>
        <div className="news__author">
          <div className="news__author__circle">
            <Avatar alt={author} src="/static/images/avatar/2.jpg" />
          </div>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
