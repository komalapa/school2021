export default class Sounds{
  constructor(srcs){
    if (Sounds._instance) {
      return Sounds._instance;
    }
    this.paths = {...srcs}
    this.elements = [];
    this.container = document.createElement('div')
    this.container.id = 'audios'
    for (let name in this.paths){
      const audioEl = document.createElement('audio');
      audioEl.id = 'audio-'+name;
      audioEl.src = this.paths[name];
      audioEl.loop = false;
      audioEl.autoplay = false;
      audioEl.muted = false;
      this.container.append(audioEl)
      console.log(audioEl)
      if (name === 'main') this.main = audioEl;
    }
    document.documentElement.append(this.container)
    this.main.autoplay = true;
    Sounds._instance = this;
  }
}