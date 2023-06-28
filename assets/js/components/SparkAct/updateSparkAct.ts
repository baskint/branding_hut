// import useSWR from 'swr';
import { GraphQLClient } from 'graphql-request';
// import { format } from 'date-fns';

const API_ENDPOINT = '/api/graphql';

export const updateSparkAct = async (
  id: number,
  attrs: {
    actDateTime?: string;
    bounceRate?: number | null;
    clickThruRate?: number | null;
    cpa?: number | null;
    messages?: number | null;
    palavers?: number | null;
    jottings?: number | null;
    viewThrough?: number | null;
    yells?: number | null;
  }
) => {
  const graphQLClient = new GraphQLClient(API_ENDPOINT);
  const mutation = `
    mutation UpdateSparkAct(
      $id: ID!,
      $attrs: UpdateSparkActInput!
    ) {
      updateSparkAct(
        id: $id,
        attrs: $attrs
      ) {
        id
        actDateTime
        jottings
        bounceRate
        cpa
        clickThruRate
        messages
        viewThrough
        palavers
        yells
      }
    }
  `;

  const variables = {
    id,
    attrs,
  };

  try {
    const data = await graphQLClient.request(mutation, variables);
    return data.updateSparkAct;
  } catch (error) {
    console.error('Mutation failed:', error);
    throw error;
  }
};