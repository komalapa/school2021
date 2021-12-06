import { INewsData } from '../../interfaces/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news:News;

    sources:Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:INewsData) : void{
        const values : INewsData | Array<INewsData> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:INewsData) : void {
        const values : INewsData | Array<INewsData> = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
