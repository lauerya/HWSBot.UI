declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare const apis: {
  hwsApi: string;
};
interface Item {
  Author: string;
  Price: number;
  Item: string;
  Date: string;
  Url: string;
  Text: string;
}

interface EbayItem {
  title: string[];
  galleryURL: string[];
  postalCode: string[];
  sellingStatus: SellingStatus;

}

interface SellingStatus {
  currentPrice: CurrentPrice[];
}

interface CurrentPrice {
  currencyId: string;
  __value__: string;
}

interface Product {
  productId: number;
  name: string;
  rankThreshold: number;
  priceThreshold: number;
  storeList: ProductStore[];
  productCriteriaList: ProductCriteria[];
  lastPostId: number;
}
interface ProductStore {
  productStoreId: number;
  productId: number;
  storeTypeId: StoreType;
  category: string;
}
interface ProductCriteria {
  productCriteriaId: number;
  value: string;
  rank: number;
}

declare enum StoreType {
  Reddit = 1,
  Ebay = 2
}
