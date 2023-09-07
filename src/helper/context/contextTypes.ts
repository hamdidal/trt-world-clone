import { Article } from "../../types/models";

export interface ContextProps {
  newsData: Article[];
  newsPopularData: Article[];
  setNewsTopic: (value: string) => void;
  topic: string;
}
