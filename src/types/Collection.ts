import { Image } from './Image';
import { PageInfo } from './PageInfo';

export type Collection = {
  readonly id: string;
  readonly description: string;
  readonly handle: string;
  readonly image: Image;
  readonly productsCount: number;
  readonly title: string;
};

export type CollectionWrapper = {
  readonly collection: Collection;
};

export type CollectionData = {
  readonly data: CollectionWrapper;
};

export type CollectionNodes = {
  readonly nodes: readonly Collection[];
};

export type CollectionEdge = {
  readonly cursor: string;
  readonly node: Collection;
};

export type CollectionEdges = {
  readonly edges: readonly CollectionEdge[];
  readonly pageInfo: PageInfo;
};

export type CollectionEdgesWrapper = {
  readonly collections: CollectionEdges;
};

export type CollectionsData = {
  readonly data: CollectionEdgesWrapper;
};
