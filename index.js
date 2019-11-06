/**
  * Vue Mixpanel v1.0.0
  * https://github.com/Loschcode/vue-mixpanel
  *
  * Copyright 2019, cmp-cc
  * Released under the MIT license
  */

import Mixpanel from 'mixpanel'

let VueMixpanel = {}

VueMixpanel.install = function (Vue, options) {
  Vue.prototype.$mixpanel = Mixpanel.init(options.token)
}

export default VueMixpanel
