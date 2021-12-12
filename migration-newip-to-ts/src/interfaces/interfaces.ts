export interface RespData{
  endpoint:string;
  options:object
}

export interface Options { 
  [key:string] : string; 
}

export interface NewsData{
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