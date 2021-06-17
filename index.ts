/**
  * Vue Mixpanel v1.1.0
  * https://github.com/Loschcode/vue-mixpanel
  *
  * Copyright 2020-2021, cmp-cc
  * Released under the MIT license
  */

import mixpanel from 'mixpanel-browser'

interface VueMixpanelType {
  install: object
}

let VueMixpanel: VueMixpanelType = {
  install: () => {}
}

VueMixpanel.install = function (Vue: any, { config, token }: { config: object; token: string; }) {
  if (typeof config !== 'object') config = {}

  Vue.prototype.$mixpanel = mixpanel

  const defaultConfig = {}
  const endConfig = Object.assign(config, defaultConfig)

  Vue.prototype.$mixpanel.init(token, endConfig)
}

export default VueMixpanel
