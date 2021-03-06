**If you like this plugin do not hesitate to [star it](https://github.com/Loschcode/vue-mixpanel) or [follow me on Github](https://github.com/Loschcode). I've noticed hundreds of people use this one weekly in particular without problem, it'll motivate me to develop more open source stuff, thanks 🙂**

# vue-mixpanel

A simple Vue.js plugin for [Mixpanel](https://mixpanel.com/)

## Prerequisite ⚠️

If the browser where events are dispatched has [Do Not Track](https://community.mixpanel.com/sending-data-to-mixpanel-11/integration-issue-539) enabled, it won't work. This is due to Mixpanel limitations and is out of control of this plugin.

For testing purpose, don't forget to [turn it off yourself](https://support.google.com/chrome/answer/2790761?co=GENIE.Platform%3DDesktop&hl=en-GB).

## Installation

### Browser
```
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-mixpanel@2.0.0/index.js"></script>
```
### Package Managers
```
npm install vue-mixpanel --save
yarn add vue-mixpanel --save
```

### How does it work?

- Initialize it by using the token given by your [Mixpanel](https://mixpanel.com/) account in the `app.use()` inside you `main.js`
- Start using their public API with `inject` through `this.mixpanel` in your components.

## Example Usage

>If you're using Vue 2 or below, please check the version [1.1.0](https://github.com/Loschcode/vue-mixpanel/releases/tag/1.1.0)

#### Initialize with configuration
```
import App from './App.vue'
import VueMixpanel from 'vue-mixpanel'

const app = createApp(App)
app.use(VueMixpanel, {
  token: YOUR_TOKEN,
  config: {
    debug: true
  }
})
app.mount('#app')
```

Then, you can use it in your components like so

```
<script>
export default {
  inject: ['mixpanel'],
  name: 'App',

  created () {
    this.mixpanel.track('test')
  }
}
</script>
```

#### Track an event
```
this.mixpanel.track('event name', {
    distinct_id: 'unique client id',
    property_1: 'value 1',
    property_2: 'value 2',
    property_3: 'value 3'
});
```

#### Create an alias
```
this.mixpanel.alias('distinct_id', 'your_alias');
```

#### Increment a numeric property
```
this.mixpanel.people.increment('13793', 'games_played');
```

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2019-present, cmp-cc
