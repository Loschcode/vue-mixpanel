import { inject } from 'vue'
import type { App, InjectionKey } from 'vue'
import mixpanel from 'mixpanel-browser'
import type {
  AutocaptureConfig,
  Callback,
  Config,
  Dict,
  FlagsConfig,
  FlagsManager,
  FlagsVariant,
  Group,
  Mixpanel,
  NormalResponse,
  OverridedMixpanel,
  People,
  Persistence,
  RegisterOptions,
  RequestOptions,
  Response,
  VerboseResponse,
} from 'mixpanel-browser'

/** Options for configuring the VueMixpanel plugin. */
export interface MixpanelPluginOptions {
  /** Your Mixpanel project token. */
  token: string
  /**
   * Mixpanel SDK configuration options.
   * @see https://docs.mixpanel.com/docs/tracking-methods/sdks/javascript
   */
  config?: Partial<Config>
}

/** Convenience alias for the Mixpanel singleton type returned by `useMixpanel()`. */
export type MixpanelInstance = OverridedMixpanel

/** Typed injection key for the Mixpanel instance. Use with Vue's `inject()` or the Options API. */
export const mixpanelKey: InjectionKey<MixpanelInstance> = Symbol('mixpanel')

/**
 * Vue plugin that initializes Mixpanel and provides the instance to all components
 * via dependency injection.
 *
 * @example
 * ```ts
 * import { createApp } from 'vue'
 * import { VueMixpanel } from 'vue-mixpanel'
 *
 * createApp(App)
 *   .use(VueMixpanel, {
 *     token: 'YOUR_TOKEN',
 *     config: { debug: true, track_pageview: true },
 *   })
 *   .mount('#app')
 * ```
 */
export const VueMixpanel = {
  install(app: App, options: MixpanelPluginOptions) {
    const { token, config = {} } = options
    mixpanel.init(token, config)
    app.provide(mixpanelKey, mixpanel)
  },
}

/**
 * Composable that returns the fully-typed Mixpanel instance.
 * Must be called inside a component's `setup()` function.
 *
 * Provides full autocomplete for all Mixpanel SDK methods including
 * `track`, `identify`, `people`, `flags`, session replay, and GDPR controls.
 *
 * @throws If the `VueMixpanel` plugin has not been installed via `app.use()`.
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useMixpanel } from 'vue-mixpanel'
 *
 * const mixpanel = useMixpanel()
 *
 * mixpanel.track('Page Viewed', { page: 'home' })
 * mixpanel.identify('user-123')
 * mixpanel.people.set({ $name: 'Jane', plan: 'pro' })
 * </script>
 * ```
 */
export function useMixpanel(): MixpanelInstance {
  const instance = inject(mixpanelKey)
  if (!instance) {
    throw new Error(
      'Mixpanel is not installed. Did you forget to call app.use(VueMixpanel, { token: "..." })?',
    )
  }
  return instance
}

export default VueMixpanel

// Re-export all useful types from mixpanel-browser so users
// can import everything from 'vue-mixpanel' without needing
// a separate import from 'mixpanel-browser'.
export type {
  AutocaptureConfig,
  Callback,
  Config,
  Dict,
  FlagsConfig,
  FlagsManager,
  FlagsVariant,
  Group,
  Mixpanel,
  NormalResponse,
  OverridedMixpanel,
  People,
  Persistence,
  RegisterOptions,
  RequestOptions,
  Response,
  VerboseResponse,
}
