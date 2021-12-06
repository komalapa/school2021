import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', { // 'https://newsapi.org/v2/' default link doesn't work on gh-pages!
            apiKey: 'bdb3d3c1f2d44d208e71ace7ce56bd6c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
