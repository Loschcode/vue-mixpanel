import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createApp, defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import mixpanel from 'mixpanel-browser'
import { VueMixpanel, useMixpanel, mixpanelKey } from '../src/index'

vi.mock('mixpanel-browser', () => ({
  default: {
    init: vi.fn(),
    track: vi.fn(),
    identify: vi.fn(),
    reset: vi.fn(),
    people: {
      set: vi.fn(),
      set_once: vi.fn(),
      increment: vi.fn(),
    },
  },
}))

describe('VueMixpanel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('plugin install', () => {
    it('initializes mixpanel with token and default empty config', () => {
      const app = createApp({ render: () => h('div') })
      app.use(VueMixpanel, { token: 'test-token' })

      expect(mixpanel.init).toHaveBeenCalledWith('test-token', {})
    })

    it('initializes mixpanel with custom config', () => {
      const app = createApp({ render: () => h('div') })
      const config = { debug: true, persistence: 'localStorage' as const }
      app.use(VueMixpanel, { token: 'test-token', config })

      expect(mixpanel.init).toHaveBeenCalledWith('test-token', config)
    })

    it('provides mixpanel instance via injection key', () => {
      const app = createApp({ render: () => h('div') })
      const provideSpy = vi.spyOn(app, 'provide')
      app.use(VueMixpanel, { token: 'test-token' })

      expect(provideSpy).toHaveBeenCalledWith(mixpanelKey, mixpanel)
    })
  })

  describe('useMixpanel', () => {
    it('returns mixpanel instance when plugin is installed', () => {
      const TestComponent = defineComponent({
        setup() {
          const mp = useMixpanel()
          return { mp }
        },
        render() {
          return h('div')
        },
      })

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [[VueMixpanel, { token: 'test-token' }]],
        },
      })

      expect(wrapper.vm.mp).toBe(mixpanel)
    })

    it('throws when plugin is not installed', () => {
      const TestComponent = defineComponent({
        setup() {
          useMixpanel()
          return {}
        },
        render() {
          return h('div')
        },
      })

      expect(() => {
        mount(TestComponent)
      }).toThrow('Mixpanel is not installed')
    })
  })

  describe('mixpanelKey', () => {
    it('is a symbol', () => {
      expect(typeof mixpanelKey).toBe('symbol')
    })

    it('can be used with inject in Options API', () => {
      const TestComponent = defineComponent({
        inject: { mixpanel: { from: mixpanelKey as symbol } },
        render() {
          return h('div')
        },
      })

      const wrapper = mount(TestComponent, {
        global: {
          plugins: [[VueMixpanel, { token: 'test-token' }]],
        },
      })

      expect((wrapper.vm as unknown as { mixpanel: typeof mixpanel }).mixpanel).toBe(mixpanel)
    })
  })
})
