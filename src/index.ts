import { inject } from 'vue'
import type { App, InjectionKey } from 'vue'
import mixpanel from 'mixpanel-browser'
import type { Config, OverridedMixpanel } from 'mixpanel-browser'

export interface MixpanelPluginOptions {
  token: string
  config?: Partial<Config>
}

export const mixpanelKey: InjectionKey<OverridedMixpanel> = Symbol('mixpanel')

export const VueMixpanel = {
  install(app: App, options: MixpanelPluginOptions) {
    const { token, config = {} } = options
    mixpanel.init(token, config)
    app.provide(mixpanelKey, mixpanel)
  },
}

export function useMixpanel(): OverridedMixpanel {
  const instance = inject(mixpanelKey)
  if (!instance) {
    throw new Error(
      'Mixpanel is not installed. Did you forget to call app.use(VueMixpanel, { token: "..." })?',
    )
  }
  return instance
}

export default VueMixpanel
