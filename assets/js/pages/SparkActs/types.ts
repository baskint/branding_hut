import { SparkActItem } from '../../api-types/sparkAct';

export type SparkActListResponse = {
  sparkActs: SparkActItem[];
}

export interface SparkActProps {
  data: SparkActListResponse | undefined;
  isLoading: boolean;
  error: string;
}

export interface SparkActsTableProps {
  rows: SparkActItem[];
  isLoading: boolean;
}
