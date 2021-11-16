export default class Sounds{
  constructor(srcs){
    if (Sounds._instance) {
      // console.log('double')
      return Sounds._instance;
    }
    this.paths = {...srcs};
    this.sounds = [];
    this.container = document.createElement('div');
    this.container.id = 'audios';
    for (let name in this.paths){
      const audioEl = document.createElement('audio');
      audioEl.id = 'audio-'+name;
      audioEl.src = this.paths[name];
      audioEl.loop = false;
      audioEl.autoplay = false;
      audioEl.muted = false;
      
      this.container.append(audioEl);
      // console.log(audioEl)
      (name === 'main') ? this.main = audioEl : this.sounds.push(audioEl);
    }
    document.documentElement.append(this.container);
    this.isMusicOn = true;
    this.main.loop = true;
    if (this.isMusicOn) this.main.autoplay = true;
    Sounds._instance = this;
  }
  playClick(){
    this.container.querySelector('#audio-click').play()
  }

  playWrong(){
    this.container.querySelector('#audio-wrong').play()
  }
  muteAll(){
    this.muteMusic();
    this.muteSounds();
  }
  muteMusic(){
    this.main.muted = true;
    this.main.pause();
  }
  muteSounds(){
    this.sounds.forEach(element => {
      element.muted = true;
    });
  }
}