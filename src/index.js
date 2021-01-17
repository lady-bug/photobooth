import logMessage from './js/logger'
import './js/index.js'
import './css/style.css'
// Log message to console
logMessage('Welcome to the new Photobooth!')

//hot module replacement
if (typeof(module.hot) !== 'undefined') {
  //eslint-disable-line no-undef
  module.hot.accept()
}
