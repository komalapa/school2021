import './news.css';
import { INewsData } from '../../../interfaces/interfaces';

class News {
    draw(data:Array<INewsData>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;
          
            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const newsClonePhoto = newsClone.querySelector('.news__meta-photo') as HTMLImageElement;
            newsClonePhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            const authorEl = newsClone.querySelector('.news__meta-author');
            if (authorEl) authorEl.textContent = item.author || item.source.name;
            const dateEl = newsClone.querySelector('.news__meta-date');
            if (dateEl) dateEl.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const titleEl = newsClone.querySelector('.news__description-title');
            if (titleEl) titleEl.textContent = item.title;

            const sourceEl = newsClone.querySelector('.news__description-source');
            if (sourceEl) sourceEl.textContent = item.source.name;

            const contentEl = newsClone.querySelector('.news__description-content');
            if (contentEl) contentEl.textContent = item.description;

            const moreEl = newsClone.querySelector('.news__read-more a');
            if (moreEl) moreEl.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const container = document.querySelector('.news') as HTMLElement;
        container.innerHTML = '';
        container.appendChild(fragment);
    }
}

export default News;
