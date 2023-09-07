import "./index.css";
import Popular from "../../components/Popular";
import NewsHorizontal from "../../components/News/HorizontalNews";
import Divider from "../../components/Divider";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../../helper/languages/i18next";
import News from "../../components/News";
import { useMyContext } from "../../helper/context/context";

const Topics = () => {
  const { t } = useTranslation();
  const { newsData } = useMyContext();

  return (
    <div className="home">
      <div className="home_title"> {t("homePage.title")}</div>
      <div className="sections">
        <div className="section-1">
          <img
            className="section-1__img"
            src={newsData[0]?.urlToImage}
            alt=""
            loading="lazy"
          />
          <div className="section-1__info--wrapper">
            <div className="section-1__info--inner-wrapper__info">
              <p className="section-1__info--inner-wrapper__info__title">
                {newsData[0]?.title}
              </p>
              <div className="section-1__info--inner-wrapper__info__author">
                <Avatar alt={newsData[2]?.author} src={newsData[2]?.author} />
                <p>{newsData[2]?.author}</p>
              </div>
            </div>
          </div>
          <div className="section-1__info--wrapper_2">
            <div className="section-1__info--inner-wrapper__info">
              <p className="section-1__info--inner-wrapper__info__title">
                {newsData[0]?.title}
              </p>
              <div className="section-1__info--inner-wrapper__info__author">
                <Avatar alt={newsData[0]?.author} src={newsData[0]?.author} />
                <p>{newsData[0]?.author}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "0rem 3rem",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Divider />
        </div>
        <div className="section-2">
          <News
            img={newsData[1]?.urlToImage}
            title={newsData[1]?.title}
            content={newsData[1]?.content}
            author={newsData[1]?.author}
            borderDirection="Right"
          />
          <div className="section-2--right">
            <div className="section-2--mid">
              <News
                img={newsData[2]?.urlToImage}
                title={newsData[2]?.title}
                content={newsData[2]?.content}
                author={newsData[2]?.author}
                borderDirection="Bottom"
                smaller={true}
              />
              <Divider />
              <News
                img={newsData[3]?.urlToImage}
                title={newsData[3]?.title}
                content={newsData[3]?.content}
                author={newsData[3]?.author}
                smaller={true}
              />
            </div>
            <div className="section-2__popular">
              <h4 className="section-2__popular__title">
                {t("homePage.popularTitle")}
              </h4>

              <Popular />
            </div>
          </div>
        </div>
      </div>
      <div className="grid-column">
        <div
          style={{
            borderRight: "1px rgba(225, 230, 235, 1) solid",
            padding: "0px 24px",
          }}
        >
          <NewsHorizontal
            img={newsData[4]?.urlToImage}
            title={newsData[4]?.title}
            content={newsData[4]?.content}
            author={newsData[4]?.author}
            borderDirection="Bottom"
            smaller={true}
          />
          <Divider />
          <NewsHorizontal
            img={newsData[5]?.urlToImage}
            title={newsData[5]?.title}
            content={newsData[5]?.content}
            author={newsData[5]?.author}
            borderDirection="Bottom"
            smaller={true}
          />
          <Divider />
          <News
            img={newsData[6]?.urlToImage}
            title={newsData[6]?.title}
            content={newsData[6]?.content}
            author={newsData[6]?.author}
            borderDirection="Bottom"
            smaller={true}
          />
          <Divider />
          <NewsHorizontal
            img={newsData[7]?.urlToImage}
            title={newsData[7]?.title}
            content={newsData[7]?.content}
            author={newsData[7]?.author}
            borderDirection="Bottom"
            smaller={true}
          />
          <Divider />
          <NewsHorizontal
            img={newsData[8]?.urlToImage}
            title={newsData[8]?.title}
            content={newsData[8]?.content}
            author={newsData[8]?.author}
            borderDirection="Bottom"
            smaller={true}
          />
        </div>
        <div className="editor_new">
          <News
            img={newsData[9]?.urlToImage}
            title={newsData[9]?.title}
            content={newsData[9]?.content}
            author={newsData[9]?.author}
            borderDirection="Bottom"
            smaller={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Topics;
