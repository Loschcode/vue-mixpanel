"use strict";
/**
  * Vue Mixpanel v1.1.0
  * https://github.com/Loschcode/vue-mixpanel
  *
  * Copyright 2020-2021, cmp-cc
  * Released under the MIT license
  */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mixpanel_browser_1 = __importDefault(require("mixpanel-browser"));
var VueMixpanel = {
    install: function () { }
};
VueMixpanel.install = function (Vue, _a) {
    var config = _a.config, token = _a.token;
    if (typeof config !== 'object')
        config = {};
    Vue.prototype.$mixpanel = mixpanel_browser_1.default;
    var defaultConfig = {};
    var endConfig = Object.assign(config, defaultConfig);
    Vue.prototype.$mixpanel.init(token, endConfig);
};
exports.default = VueMixpanel;
