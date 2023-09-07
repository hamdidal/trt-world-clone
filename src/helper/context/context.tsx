import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Article } from "../../types/models";
import { useQuery } from "react-query";
import { getAllNews, getTopNews } from "../../services/endpoints";
import { ContextProps } from "./contextTypes";

const NewsPageContext = createContext<ContextProps>([] as any);

const NewsContext = ({ children }: any) => {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [newsPopularData, setNewsPopularData] = useState<Article[]>([]);

  const [topic, setTopic] = useState<string>("america");

  const { data: popularData, refetch: popularDataRefetch } = useQuery(
    ["popularNews"],
    () =>
      getTopNews({
        filter: topic,
      }),
    {
      enabled: true,
    }
  );

  const { data: allNewsData, refetch: refetchAllNews } = useQuery(
    ["news"],
    () =>
      getAllNews({
        filter: topic,
      }),
    { enabled: true }
  );

  useEffect(() => {
    const parsedData = popularData?.articles
      .filter((data) => data.urlToImage)
      ?.slice(0, 5);
    if (parsedData) setNewsPopularData(parsedData);
  }, [popularData]);

  useEffect(() => {
    const parsedData = allNewsData?.articles
      .filter((data) => data.urlToImage)
      .slice(0, 19);
    if (parsedData) setNewsData(parsedData);
  }, [allNewsData]);

  useEffect(() => {
    refetchAllNews();
    popularDataRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  const setNewsTopic = useCallback((value: string) => {
    if (value) {
      setTopic(value);
    }
  }, []);

  return (
    <NewsPageContext.Provider
      value={{
        newsData,
        newsPopularData,
        setNewsTopic,
        topic,
      }}
    >
      {children}
    </NewsPageContext.Provider>
  );
};

export const useMyContext = () => useContext(NewsPageContext);
export default NewsContext;
