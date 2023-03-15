// import useSWR from 'swr';
import { GraphQLClient } from 'graphql-request';
import { format } from 'date-fns';

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
const actDateTime = format(new Date(),'yyyy-MM-dd hh:mm:ss');
const variables = {
    actDateTime: actDateTime,
    jottings: 5,
    bounceRate: 3.87,
    clickThruRate: 1.8,
    cpa: 0.27,
    messages: 12,
    palavers: 10,
    yells: 94,
    viewThrough: 2.5
  }

  const data = await graphQLClient.request(mutation, variables);
  console.log(JSON.stringify(data, undefined, 2));

  return {
    data,
  };
};
