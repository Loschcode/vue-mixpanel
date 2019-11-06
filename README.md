# vue-mixpanel

A simple Vue.js plugin for Mixpanel

## Installation

### Browser
```
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-mixpanel@1.0.0/index.js"></script>
```
### Package Managers
```
npm install vue-mixpanel --save
yarn add vue-mixpanel --save

// require
var Vue = require('vue')
Vue.use(require('vue-mixpanel'), {
  token: YOUR_TOKEN
})

// import
import Vue from 'vue'
import VueMixpanel from 'vue-mixpanel'
Vue.use(VueMixpanel, {
  token: YOUR_TOKEN
})
```

### How does it work?

- Initialize it by using the token given by your Mixpanel account in the Vue.use() inside you `main.js`
- Start using their public API through `this.$mixpanel` in your components.

## Example Usage

#### track an event
```
this.$mixpanel.track('event name', {
    distinct_id: 'unique client id',
    property_1: 'value 1',
    property_2: 'value 2',
    property_3: 'value 3'
});
```

#### create an alias
```
this.$mixpanel.alias('distinct_id', 'your_alias');
```

#### increment a numeric property
```
this.$mixpanel.people.increment('13793', 'games_played');
```

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2019-present, cmp-cc
