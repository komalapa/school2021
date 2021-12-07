import greetingRender from './gretingRender';

// Another singleton for linter
function SoundsSingleton() {
  let instance;

  function init(srcs) {
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
        instance.main.muted = state;
        if (!state) instance.main.play();
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
