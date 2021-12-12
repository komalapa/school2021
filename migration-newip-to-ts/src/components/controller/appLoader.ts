import { key } from '../../config';
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', { // 'https://newsapi.org/v2/' default link doesn't work on gh-pages!
            apiKey: key, // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
