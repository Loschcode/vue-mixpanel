/**
  * Vue Mixpanel v2.0.0
  * https://github.com/Loschcode/vue-mixpanel
  *
  * Copyright 2020-2021, cmp-cc
  * Released under the MIT license
  */

import mixpanel from 'mixpanel-browser'

export default {
  install: (app: any, { config = {}, token }: { config: object; token: string;}) => {
    const defaultConfig = {}
    const endConfig = Object.assign(config, defaultConfig)

    mixpanel.init(token, endConfig)
    app.provide('mixpanel', mixpanel)
  }
}
