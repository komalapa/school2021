import { IMAGES_AMOUNT } from './consts';

function StateSingleton() {
// Instance stores a reference to the singleton
  let instance;

  function init() {
    if (typeof instance === 'undefined') {
      instance = {};
      instance.picture = new Array(IMAGES_AMOUNT);
      instance.author = new Array(IMAGES_AMOUNT);
      // console.log();
      instance.timer = null;
      instance.stopTimer = () => {
        clearTimeout(instance.timer);
        instance.timer = null;
      };
    }
    return instance;
  }
  return init;
}
const State = StateSingleton();
export default State;
