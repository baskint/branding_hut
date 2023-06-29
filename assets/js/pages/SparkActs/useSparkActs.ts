import useSWR, { mutate } from 'swr';
import { request } from 'graphql-request';

const API_ENDPOINT = '/api/graphql';

export const useSparkActs = (sortBy = "act_date_time", sortDirection ="desc") => {
  const saQuery = `
    query ($sortBy: String, $sortDirection: String) {
        sparkActs(sortBy: $sortBy, sortDirection: $sortDirection) {
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

  const variables = {
    sortBy,
    sortDirection
  }

  const { data, error, isLoading } = useSWR(
    saQuery, (query: string) =>
    request(API_ENDPOINT, query, variables),
  );

  return {
    data,
    isLoading,
    error,
    reload: () => mutate(saQuery)
  };
};
