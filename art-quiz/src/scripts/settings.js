function SettingsSingleton() {
// Instance stores a reference to the singleton
  let instance;

  function init() {
    if (typeof instance === 'undefined') {
      instance = {};
      instance.music = localStorage.getItem('komaAQmusic') ? JSON.parse(localStorage.getItem('komaAQmusic')) : true;
      instance.sounds = localStorage.getItem('komaAQsounds') ? JSON.parse(localStorage.getItem('komaAQsounds')) : true;
      instance.volume = localStorage.getItem('komaAQvolume') || 0.5;
      instance.answers = localStorage.getItem('komaAQanswers') || 2;
      instance.timer = localStorage.getItem('komaAQtimer') ? JSON.parse(localStorage.getItem('komaAQtimer')) : null;

      instance.toggleMusic = () => {
        instance.music = !instance.music;
        localStorage.setItem('komaAQmusic', instance.music);
      };
      instance.toggleSounds = () => {
        instance.sounds = !instance.sounds;
        localStorage.setItem('komaAQsounds', instance.sounds);
      };
      instance.setVolume = (value) => {
        instance.volume = value;
        localStorage.setItem('komaAQvolume', value);
      };
      instance.setAnswers = (value) => {
        instance.answers = value;
        localStorage.setItem('komaAQanswers', value);
      };
      instance.setTimer = (value) => {
        instance.timer = value;
        localStorage.setItem('komaAQtimer', value);
      };
    }
    return instance;
  }
  return init;
}
const Settings = SettingsSingleton();
export default Settings;
