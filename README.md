# vue-mixpanel

Mixpanel analytics plugin for Vue 3. Type-safe, composable-based, and compatible with the full [Mixpanel JavaScript SDK](https://docs.mixpanel.com/docs/tracking-methods/sdks/javascript).

## Installation

```bash
npm install vue-mixpanel mixpanel-browser
```

Both `vue` (>=3.3) and `mixpanel-browser` (>=2.45) are peer dependencies.

## Setup

```typescript
import { createApp } from 'vue'
import VueMixpanel from 'vue-mixpanel'
import App from './App.vue'

const app = createApp(App)

app.use(VueMixpanel, {
  token: 'YOUR_MIXPANEL_TOKEN',
  config: {
    debug: import.meta.env.DEV,
    track_pageview: true,
    persistence: 'localStorage',
  },
})

app.mount('#app')
```

## Usage

### Composable (recommended)

```vue
<script setup lang="ts">
import { useMixpanel } from 'vue-mixpanel'

const mixpanel = useMixpanel()

function onSignUp(userId: string) {
  mixpanel.identify(userId)
  mixpanel.people.set({ $name: 'Jane Doe', plan: 'premium' })
  mixpanel.track('Sign Up', { method: 'email' })
}
</script>
```

### Options API

```vue
<script>
import { mixpanelKey } from 'vue-mixpanel'

export default {
  inject: { mixpanel: { from: mixpanelKey } },
  methods: {
    trackEvent() {
      this.mixpanel.track('Button Clicked')
    },
  },
}
</script>
```

## Configuration

All [Mixpanel SDK configuration options](https://docs.mixpanel.com/docs/tracking-methods/sdks/javascript) are supported via the `config` property:

```typescript
app.use(VueMixpanel, {
  token: 'YOUR_TOKEN',
  config: {
    // Debugging
    debug: true,

    // Automatic page view tracking
    track_pageview: 'url-with-path',

    // Storage
    persistence: 'localStorage',

    // EU data residency
    api_host: 'https://api-eu.mixpanel.com',

    // Autocapture (clicks, forms, scrolls)
    autocapture: true,

    // Session replay (sample 10% of sessions)
    record_sessions_percent: 10,

    // GDPR — start opted out, call mixpanel.opt_in_tracking() on consent
    opt_out_tracking_by_default: true,
  },
})
```

## API

### `VueMixpanel`

Vue plugin. Install with `app.use(VueMixpanel, options)`.

| Option   | Type              | Required | Description                 |
| -------- | ----------------- | -------- | --------------------------- |
| `token`  | `string`          | Yes      | Your Mixpanel project token |
| `config` | `Partial<Config>` | No       | Mixpanel SDK configuration  |

### `useMixpanel()`

Composable that returns the Mixpanel instance. Must be called inside a component `setup()`.

```typescript
const mixpanel = useMixpanel()
```

Throws if the plugin was not installed.

### `mixpanelKey`

Typed `InjectionKey<OverridedMixpanel>` for use with Vue's `inject()` or the Options API `inject` option.

### `MixpanelPluginOptions`

TypeScript interface for the plugin options.

## Mixpanel SDK features

The `useMixpanel()` composable returns the full Mixpanel instance. All SDK methods are available:

```typescript
const mixpanel = useMixpanel()

// Event tracking
mixpanel.track('Purchase', { amount: 49.99, currency: 'USD' })
mixpanel.track_pageview()
mixpanel.time_event('Checkout')

// Identity
mixpanel.identify('user-123')
mixpanel.alias('user-123', mixpanel.get_distinct_id())
mixpanel.reset()

// User profiles
mixpanel.people.set({ $email: 'user@example.com', plan: 'pro' })
mixpanel.people.set_once({ 'First Login': new Date().toISOString() })
mixpanel.people.increment('logins', 1)

// Super properties (sent with every event)
mixpanel.register({ app_version: '2.0.0' })
mixpanel.register_once({ referrer: document.referrer })

// Group analytics
mixpanel.set_group('company', 'Acme Corp')

// Privacy / GDPR
mixpanel.opt_out_tracking()
mixpanel.opt_in_tracking()

// Session replay
mixpanel.start_session_recording()
mixpanel.stop_session_recording()
```

See the [Mixpanel JavaScript SDK docs](https://docs.mixpanel.com/docs/tracking-methods/sdks/javascript) for the full API reference.

## Migrating from v2

v3 is a complete rewrite. Key changes:

- **Peer dependencies**: Install `mixpanel-browser` separately (`npm install mixpanel-browser`)
- **New composable**: Use `useMixpanel()` instead of `inject('mixpanel')`
- **ESM + CJS**: Proper dual-format package with TypeScript declarations
- **Built-in types**: No need for `@types/mixpanel-browser`

The plugin setup API (`app.use(VueMixpanel, { token, config })`) is unchanged.

## License

[MIT](LICENSE)
