import useSWR, { mutate } from 'swr';
import { request } from 'graphql-request';

const API_ENDPOINT = '/api/graphql';

export const useSparkActs = () => {
  const saQuery = `
  {
    sparkActs {
      id
      actDateTime
      bounceRate
      clickThruRate
      cpa
      jottings
      messages
      palavers
      viewThrough
      yells
    }
  }
  `;

  const { data, error, isLoading } = useSWR(
    saQuery, (query: string) =>
    request(API_ENDPOINT, query),
  );

  return {
    data,
    isLoading,
    error,
    reload: () => mutate(saQuery)
  };
};
