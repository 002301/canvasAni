
let GlitchArt = (dom, url, maxoffset = 10)=> {
    let _canvas = null,
    _ctx = null,
    _dom = dom,
    _maxoffset = maxoffset,

  initCanvas = (dom) =>{
    _dom = getDom();
    // console.log(this._dom.getBoundingClientRect())
    _canvas = document.createElement('canvas');
    _dom.appendChild(_canvas);
    if (_canvas != null) {
      _ctx = _canvas.getContext('2d');
      let { width: cssWidth, height: cssHeight, top: _top, left: _left } = _dom.getBoundingClientRect();
      // console.log(cssWidth, cssHeight)
      _canvas.width = cssWidth ;
      _canvas.height = cssHeight ;
      let st = `width:100%;height:100%`;
      _canvas.style = st;
      
    } else {
      console.log('canvas null')
    }
  },
  getDom = ()=>{
    return document.querySelector(dom)
  },
  del=()=>{
    _canvas = _ctx= null;
  },
  setBg = (url)=>{
    let img = new Image();
    img.src = url;
    img.onload = () =>{
      if (IsPC()){
        _dom.dpr = 1;
        _dom.width = img.width;
        _dom.height = img.height;
      }else{
        _dom.dpr = _canvas.width / img.width;
        _dom.width = img.width * _dom.dpr;
        _dom.height = img.height * _dom.dpr;
      }

      animation(img)
    };
  },
  animation =(img) =>{
    let totalTime = 450;
    let currentTime = 0;
    const render = ()=>{
      if(!getDom()){
        del();
        return;
      }
      setTimeout(() => {
        if (currentTime < totalTime) {
          draw(img);
          currentTime += 50;
          render();
        } else {
          _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
          _ctx.drawImage(img, 0, 0, _dom.width, _dom.height);
          setTimeout(() => {
            currentTime = 0;
            render();
          }, 2000);
        }
      }, 30);
    }
    render()
  },
  draw =(img)=> {
    let totolHeight = 0;
    _ctx.clearRect(0, 0, _dom.width, _dom.height);
    while (totolHeight < img.height){
      let randHeight = getRandom(3, ~~(img.height/100*20));
      var horizOffset = getRandom(-Math.abs(_maxoffset), _maxoffset);
      _ctx.drawImage(img, 0, totolHeight, img.width, randHeight, horizOffset, totolHeight * _dom.dpr, _dom.width, randHeight*_dom.dpr);
      totolHeight += randHeight;
    }
  }
  
  initCanvas(dom);
  setBg(url);
}
let getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 平台判断
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
  }
  return flag;
}
export { GlitchArt }