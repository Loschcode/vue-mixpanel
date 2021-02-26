/**
  * Vue Mixpanel v1.0.5
  * https://github.com/Loschcode/vue-mixpanel
  *
  * Copyright 2020, cmp-cc
  * Released under the MIT license
  */

import mixpanel from 'mixpanel-browser'

let VueMixpanel = {}

VueMixpanel.install = function (Vue, { config, token }) {
  if (typeof config !== 'object') config = {}

  Vue.prototype.$mixpanel = mixpanel

  const defaultConfig = {}
  const endConfig = Object.assign(config, defaultConfig)

  Vue.prototype.$mixpanel.init(token, endConfig)
}

export default VueMixpanel
