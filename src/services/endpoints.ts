import axios from "axios";
import { BASE_URL, NEWS_API_KEY } from "../config";
import { ApiResponse } from "../types/models";

const baseUrl = BASE_URL;
const apiKey = NEWS_API_KEY;

export const getAllNews = async (params: {
  country?: string;
  sources?: string;
  category?: string;
  filter?: string;
}): Promise<ApiResponse> => {
  const { country, sources, category, filter } = params;

  const queryParams = {
    pageSize: 40,
    page: 1,
    country,
    sources,
    category,
    q: filter,
  };

  const response = await axios.get(`${baseUrl}/everything?apikey=${apiKey}`, {
    params: queryParams,
  });

  return response.data;
};

export const getTopNews = async (params: {
  country?: string;
  sources?: string;
  category?: string;
  filter?: string;
}): Promise<ApiResponse> => {
  const { country, category, sources, filter } = params;

  const queryParams = {
    apiKey,
    pageSize: 5,
    page: 1,
    country,
    sources,
    category,
    q: filter,
  };

  const response = await axios.get(
    `${baseUrl}/top-headlines?apikey=${apiKey}`,
    {
      params: queryParams,
    }
  );

  return response.data;
};
