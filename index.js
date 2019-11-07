/**
  * Vue Mixpanel v1.0.4
  * https://github.com/Loschcode/vue-mixpanel
  *
  * Copyright 2019, cmp-cc
  * Released under the MIT license
  */

import snippet from 'vue-mixpanel/utils/snippet'

let VueMixpanel = {}

VueMixpanel.install = function (Vue, { config, token }) {
  Vue.prototype.$mixpanel = snippet
  Vue.prototype.$mixpanel.init(token)

  const endConfig = config || {}
  if (Object.keys(endConfig).length > 0) Vue.prototype.$mixpanel.set_config(endConfig)
}

export default VueMixpanel
