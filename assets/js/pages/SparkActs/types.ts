export interface SparkActItem {
  id: number;
  actDateTime: string;
  bounceRate: number;
  click_thru_rate: number;
  cpa: number;
  jottings: number;
  messages: number;
  palavers: number;
  view_through: number;
  yells: number;
}

export type SparkActListResponse = {
  sparkActs: SparkActItem[];
}

export interface SparkActProps {
  data: SparkActListResponse | undefined;
  isLoading: boolean;
  error: string;
}
