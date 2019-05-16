let default_url = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
class Classic {
  constructor(art_url = default_url) {
  this.frame = 'black'
  this.art_url = art_url
}

render() {
  let el = document.createElement('div')
  el.style.backgroundImage = `url(${this.art_url})`
  el.style.backgroundSize = 'cover'
  el.style.width = '200px'
  el.style.height = '200px'
  el.style.border = `5px solid ${this.frame}`
  document.body.appendChild(el)
}
}

class Meme extends Classic{
  constructor(art_url) {
    super(art_url)
    this.frame = 'hotpink'

  }
}

var art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
art1.render()

var meme1 = new Meme("http://eyesimple.us/site/wp-content/uploads/2018/02/wazjj.jpg")
meme1.render()
