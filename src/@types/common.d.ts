declare interface IWebp {
  $isWebpEnabled: boolean;
}

declare interface IData {
  id: string;
  image: string;
  content: string;
}

declare interface IExtendedDocument extends Document {
  startViewTransition?: any;
}
