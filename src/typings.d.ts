/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare const apis: {
  hwsApi: string;
};
interface Item {
  name: string;
  price: number
  date: string;
}
