import { IRespData, IOptions, INewsData } from '../../interfaces/interfaces';

class Loader {
  private baseLink: string;

  private options: object;

  constructor(baseLink: string, options: object) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp({ endpoint, options = {} }: IRespData, callback = (data:INewsData) => console.error('No callback for GET response', data)) : void {
    this.load('GET', endpoint, callback, options);
    
  }

  errorHandler(res: Response) : Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
        throw Error(res.statusText);
      }
    }
    return res;
  }

  makeUrl(options: IOptions, endpoint: string) : string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: (data:INewsData) => void, options = {}) : void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res) => this.errorHandler(res))
      .then((res) => res.json())
      .then((data: INewsData) => callback(data))
      .catch((err) => console.error(err));
  }

  noCallback(): void {
    console.error('No callback for GET response');
  }
}

export default Loader;
