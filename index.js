"use strict";
/**
  * Vue Mixpanel v2.0.0
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
exports.default = {
    install: function (app, _a) {
        var _b = _a.config, config = _b === void 0 ? {} : _b, token = _a.token;
        var defaultConfig = {};
        var endConfig = Object.assign(config, defaultConfig);
        mixpanel_browser_1.default.init(token, endConfig);
        app.provide('mixpanel', mixpanel_browser_1.default);
    }
};
