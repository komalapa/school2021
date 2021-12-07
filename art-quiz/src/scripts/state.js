import { IMAGES_AMOUNT } from './consts';

function StateSingleton() {
  let instance;

  function init() {
    if (typeof instance === 'undefined') {
      instance = {};
      const loadedState = localStorage.getItem('komalapaAQstate');
      if (loadedState) {
        instance = JSON.parse(loadedState);
      } else {
        instance.picture = new Array(IMAGES_AMOUNT);
        instance.author = new Array(IMAGES_AMOUNT);
        instance.timer = null;
      }
      instance.stopTimer = () => {
        clearTimeout(instance.timer);
        instance.timer = null;
      };
      instance.saveState = () => localStorage.setItem('komalapaAQstate', JSON.stringify(instance));
    }
    return instance;
  }
  return init;
}
const State = StateSingleton();
export default State;
