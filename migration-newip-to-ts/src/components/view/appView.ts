import { NewsData } from '../../interfaces/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news:News;

    sources:Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:NewsData) : void{
        const values : NewsData | Array<NewsData> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:NewsData) : void {
        const values : NewsData | Array<NewsData> = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
