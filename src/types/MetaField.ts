import { PageInfo } from './PageInfo';

export type MetaField = {
  readonly description: string;
  readonly key: string;
  readonly namespace: string;
  readonly type: string;
  readonly value: string;
};

export type MetaFieldEdge = {
  readonly cursor: string;
  readonly node: MetaField;
};

export type MetaFieldEdges = {
  readonly edges: readonly MetaFieldEdge[];
  readonly pageInfo: PageInfo;
};
