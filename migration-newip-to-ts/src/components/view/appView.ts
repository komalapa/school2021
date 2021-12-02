import { INewsData } from '../../interfaces/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news:News;
    sources:Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
        console.log(this)
    }

    drawNews(data:INewsData) {
      console.log('drawNews', data)
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:INewsData) {
      console.log('drawSrcs', data)
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
