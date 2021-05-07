import { createApp } from 'vue'
import App from './App.vue'
import './css/basic.css'
createApp(App).mount('#app');
// moblie set
const WIDTH = 750
const mobileAdapter = () => {
  let scale = screen.width / WIDTH
  let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`
  let meta = document.querySelector('meta[name=viewport]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}
mobileAdapter()
window.onorientationchange = mobileAdapter;
