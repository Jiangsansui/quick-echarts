import app from './app.ui'
import $ from 'jquery'

window.$ = $
window.jQuery = $

let options = {
  app,
  i18n: {
    locale: 'zh-cn',
    components: require('#/i18n/components.json'),
    messages: {
      'zh-cn': require('./i18n/zh-cn.json'),
      'en': require('./i18n/en.json')
    }
  }
}

ui.start(options)