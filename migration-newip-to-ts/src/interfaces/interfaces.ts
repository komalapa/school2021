export interface IRespData{
  endpoint:string;
  options:object
}

export interface IOptions { 
  [key:string] : string; 
}

export interface INewsData{
  urlToImage:string;
  publishedAt:string;
  author:string;
  source:{
    name:string
  }
  title:string;
  description:string;
  url:string;
  name:string;
  articles:[];
  sources:[];
  id:string;
}