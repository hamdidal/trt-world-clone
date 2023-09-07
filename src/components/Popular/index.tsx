import { useMyContext } from "../../helper/context/context";
import "./Popular.css";

const Popular = () => {
  const { newsPopularData } = useMyContext();

  return (
    <div>
      {newsPopularData.map((data, index) => (
        <div className="popular">
          <div className="popular__index">{index + 1}</div>
          <div className="popular__info">
            <p className="popular__info__title">{data.title}</p>
            <p className="popular__info__author">{data.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
