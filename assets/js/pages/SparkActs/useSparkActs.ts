import useSWR from 'swr';
import { request } from 'graphql-request';

const API_ENDPOINT = '/api/graphql';

export const useSparkActs = (reload: boolean) => {
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
    reload ? [saQuery, reload]: saQuery, (query: string) =>
    request(API_ENDPOINT, query)
  );

  return {
    data,
    isLoading,
    error,
  };
};
