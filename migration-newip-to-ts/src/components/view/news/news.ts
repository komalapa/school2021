import './news.css';
import { NewsData } from '../../../interfaces/interfaces';

enum ElementClasses {
  'Photo' = '.news__meta-photo',
  'Author' = '.news__meta-author',
  'Date' = '.news__meta-date',
  'Title' = '.news__description-title',
  'Source' = '.news__description-source',
  'Content' = '.news__description-content',
  'More' = '.news__read-more a',
}

class News {
    draw(data:Array<NewsData>) :void {
        const news: Array<NewsData> = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment : DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;
          
            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const newsClonePhoto = newsClone.querySelector(ElementClasses.Photo) as HTMLImageElement;
            newsClonePhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            const authorEl = newsClone.querySelector(ElementClasses.Author) as HTMLElement;
            if (authorEl) authorEl.textContent = item.author || item.source.name;
            const dateEl = newsClone.querySelector(ElementClasses.Date) as HTMLElement;
            if (dateEl) dateEl.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const titleEl = newsClone.querySelector(ElementClasses.Title) as HTMLElement;
            if (titleEl) titleEl.textContent = item.title;

            const sourceEl = newsClone.querySelector(ElementClasses.Source) as HTMLElement;
            if (sourceEl) sourceEl.textContent = item.source.name;

            const contentEl = newsClone.querySelector(ElementClasses.Content) as HTMLElement;
            if (contentEl) contentEl.textContent = item.description;

            const moreEl = newsClone.querySelector(ElementClasses.More) as HTMLElement;
            if (moreEl) moreEl.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const container = document.querySelector('.news') as HTMLElement;
        container.innerHTML = '';
        container.appendChild(fragment);
    }
}

export default News;
