import useSWR from 'swr';
import { request } from 'graphql-request';

const API_ENDPOINT = '/api/graphql';

export const useSparkActs = () => {
  const saQuery = `
  {
    sparkActs {
      id
      actDateTime
      bounceRate
      click_thru_rate
      cpa
      jottings
      messages
      palavers
      view_through
      yells
    }
  }
  `;

  const { data, error, isLoading } = useSWR(saQuery, (query) =>
    request(API_ENDPOINT, query)
  );

  return {
    data: data,
    isLoading,
    error,
  };
};
