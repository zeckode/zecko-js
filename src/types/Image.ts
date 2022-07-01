import { PageInfo } from './PageInfo';

export type Image = {
  readonly altText: string;
  readonly height: number;
  readonly id: string;
  readonly url: string;
  readonly width: number;
};

export type ImageEdge = {
  readonly cursor: string;
  readonly node: Image;
};

export type ImageEdges = {
  readonly edges: readonly ImageEdge[];
  readonly pageInfo: PageInfo;
};
