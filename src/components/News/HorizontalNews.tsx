import { FC } from "react";
import { NewsProps } from "./types";
import "./News.css";
import { Avatar } from "@mui/material";

const NewsHorizontal: FC<NewsProps> = ({
  img,
  title,
  content,
  author,
  smaller,
}) => {
  return (
    <div className="news-horizontal">
      <div className="news__image">
        <img className="news__image__img" src={img} alt={""} loading="lazy" />
      </div>
      <div className="news_content">
        <p className="news__title">{title}</p>
        <p className="news__content">{content?.slice(0, 100)}</p>
        <div className="news__author">
          <Avatar alt={author} src={author} />
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsHorizontal;
