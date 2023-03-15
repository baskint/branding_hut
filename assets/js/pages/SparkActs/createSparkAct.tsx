// import useSWR from 'swr';
import { request, GraphQLClient } from 'graphql-request';

const API_ENDPOINT = '/api/graphql';

export const createSparkAct = async () => {

  const graphQLClient = new GraphQLClient(API_ENDPOINT);
  const mutation = `
  mutation(
    $actDateTime: NaiveDateTime!,
    $bounceRate: Decimal,
    $clickThruRate:Decimal,
    $cpa: Decimal,
    $messages: Int,
    $palavers: Int,
    $jottings: Int,
    $viewThrough:Decimal,
    $yells: Int
  ) {
    createSparkAct(
      actDateTime: $actDateTime,
      jottings: $jottings
      bounceRate:$bounceRate
      clickThruRate: $clickThruRate
      cpa:$cpa
      messages:$messages
      palavers:$palavers
      viewThrough:$viewThrough
      yells: $yells
    ){
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
`

const variables = {
    actDateTime: '2023-03-09T15:00:00',
    jottings: 5,
    bounceRate: 3.87,
    clickThruRate: 1.8,
    cpa: 0.27,
    messages: 12,
    palavers: 10,
    yells: 94,
    viewThrough: 2.5
  }

  // const { data, error, isLoading } = useSWR(, (query: string) =>
  //   request(API_ENDPOINT, mutation, variables)
  // );
  // const data = await request(mutation, variables)

  const data = await graphQLClient.request(mutation, variables);
  console.log(JSON.stringify(data, undefined, 2));

  return {
    data,
  };
};
