import { Image } from './Image';

export type Collection = {
  readonly id: string;
  readonly description: string;
  readonly handle: string;
  readonly image: Image;
  readonly productsCount: number;
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
};

export type CollectionEdgesWrapper = {
  readonly collections: CollectionEdges;
};

export type CollectionsData = {
  readonly data: CollectionEdgesWrapper;
};
