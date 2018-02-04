/* SystemJS module definition */
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
}
