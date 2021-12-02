import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bdb3d3c1f2d44d208e71ace7ce56bd6c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
