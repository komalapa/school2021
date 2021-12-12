import { NewsData } from '../../interfaces/interfaces';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback:CallableFunction) : void {
    super.getResp(
      {
        endpoint: 'sources',
        options: {},
      },
      (data:NewsData) => {callback(data)},
    );
  }

  getNews(e:Event, callback:CallableFunction) : void {
    if (e.target instanceof HTMLElement && e.currentTarget instanceof HTMLElement) {
    let { target } = e;
    const newsContainer:HTMLElement = e.currentTarget;
  
    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
          const sourceId = target.getAttribute('data-source-id');
          if (newsContainer.getAttribute('data-source') !== sourceId) {
              newsContainer.setAttribute('data-source',  sourceId || '');
              super.getResp(
                  {
                      endpoint: 'everything',
                      options: {
                          sources: sourceId,
                      },
                  },
                  (data:NewsData) => {callback(data)}
              );
          }
          return;
      }
      target = target.parentNode instanceof HTMLElement ? target.parentNode : newsContainer;
    }
  }
  
    }
}

export default AppController;
