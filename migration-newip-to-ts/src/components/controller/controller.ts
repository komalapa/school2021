import AppLoader from './appLoader';
import {IRespData, IOptions} from '../../interfaces/interfaces'


class AppController extends AppLoader {
    getSources(callback:Function) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {}
            },
            callback
        );
        // console.log('get srcs')
    }

    getNews(e:Event, callback:Function) {
        if (e.target instanceof HTMLElement && e.currentTarget instanceof HTMLElement){
          let target = e.target;
          const newsContainer:HTMLElement = e.currentTarget;
        
          while (target !== newsContainer) {
            if (target!.classList.contains('source__item')) {
                const sourceId = target!.getAttribute('data-source-id');
                if (newsContainer!.getAttribute('data-source') !== sourceId) {
                    newsContainer!.setAttribute('data-source', sourceId ? sourceId : '');
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode instanceof HTMLElement ? target!.parentNode : newsContainer;
          }
        }
        
    }
}

export default AppController;
