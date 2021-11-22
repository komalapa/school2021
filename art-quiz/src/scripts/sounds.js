// export default class Sounds {
//   constructor(srcs) {
//     if (Sounds.instance) {
//       // console.log('double')
//       return; // Sounds.instance;
//     }
//     this.paths = { ...srcs };
//     this.sounds = [];
//     this.container = document.createElement('div');
//     this.container.id = 'audios';
//     Object.keys(this.paths).forEach((name) => {
//       const audioEl = document.createElement('audio');
//       audioEl.id = `audio-${name}`;
//       audioEl.src = this.paths[name];
//       audioEl.loop = false;
//       audioEl.autoplay = false;
//       audioEl.muted = false;

import greetingRender from './gretingRender';

//       this.container.append(audioEl);
//       // console.log(audioEl)
//       if (name === 'main') {
//         this.main = audioEl;
//       } else this.sounds.push(audioEl);
//     });
//     document.documentElement.append(this.container);
//     this.isMusicOn = true;
//     this.main.loop = true;
//     if (this.isMusicOn) this.main.autoplay = true;
//     Sounds.instance = this;
//   }

//   playClick() {
//     this.container.querySelector('#audio-click').play();
//   }

//   playWrong() {
//     this.container.querySelector('#audio-wrong').play();
//   }

//   muteAll() {
//     this.muteMusic();
//     this.muteSounds();
//   }

//   muteMusic() {
//     this.main.muted = true;
//     this.main.pause();
//   }

//   muteSounds() {
//     this.sounds = this.sounds.map((element) => {
//       const curEl = element;
//       curEl.muted = true;
//       return curEl;
//     });
//   }
// }

// Another singleton for linter
function SoundsSingleton() {
// Instance stores a reference to the singleton
  let instance;

  function init(srcs) {
    // console.log('init', instance)
    if (typeof instance === 'undefined') {
      instance = {};
      instance.paths = { ...srcs };
      instance.sounds = [];
      instance.container = document.createElement('div');
      instance.container.id = 'audios';
      Object.keys(instance.paths).forEach((name) => {
        const audioEl = document.createElement('audio');
        audioEl.id = `audio-${name}`;
        audioEl.src = instance.paths[name];
        audioEl.loop = false;
        audioEl.autoplay = false;
        audioEl.muted = false;

        instance.container.append(audioEl);
        // console.log(audioEl)
        if (name === 'main') {
          instance.main = audioEl;
        } else instance.sounds.push(audioEl);
      });
      document.documentElement.append(instance.container);
      instance.isMusicOn = true;
      instance.main.loop = true;
      if (instance.isMusicOn) greetingRender();
      instance.playClick = () => {
        instance.container.querySelector('#audio-click').play();
      };

      instance.playWrong = () => {
        instance.container.querySelector('#audio-wrong').play();
      };

      instance.muteAll = () => {
        instance.muteMusic();
        instance.muteSounds();
      };

      instance.muteMusic = (state) => {
        // console.log(instance.main);
        instance.main.muted = state;
        if (!state) instance.main.play();
        // instance.main.pause();
      };

      instance.muteSounds = (state) => {
        instance.sounds = instance.sounds.map((element) => {
          const curEl = element;
          curEl.muted = state;
          return curEl;
        });
      };
      instance.setVolume = (value) => {
        instance.sounds = instance.sounds.map((element) => {
          const curEl = element;
          curEl.volume = value;
          return curEl;
        });
        instance.main.volume = value;
      };
    }
    return instance;
  }
  return init;
}
const Sounds = SoundsSingleton();
export default Sounds;
