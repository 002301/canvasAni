export default function initCanvas (dom){
  let _dom = document.querySelector(dom);
  // console.log(this._dom.getBoundingClientRect())
  let _canvas = document.createElement('canvas');
  _dom.appendChild(_canvas);
  if (_canvas != null) {
    let { width: cssWidth, height: cssHeight, top: _top, left: _left } = _dom.getBoundingClientRect();
    // console.log(cssWidth, cssHeight)
    _canvas.width = cssWidth;
    _canvas.height = cssHeight;
    let st = `width:100%;height:100%`;
    _canvas.style = st;
    return _canvas;
  } else {
    console.log('canvas null')
    return null;
  }
}
