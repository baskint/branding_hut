import { request } from 'graphql-request';

const API_ENDPOINT = '/api/graphql';

const deleteSparkAct = async (id: number) => {
  const mutation = `
    mutation DeleteSparkAct($id: ID!) {
      deleteSparkAct(id: $id)
    }
  `;

  const variables = {
    id: id,
  };

  try {
    // Make the GraphQL mutation request
    const resp = await request(API_ENDPOINT, mutation, variables);
    return resp;
  } catch (error) {
    console.error('Failed to delete SparkAct:', error);
    throw error;
  }
};

export default deleteSparkAct;