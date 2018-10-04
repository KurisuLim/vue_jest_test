import { mount } from '@vue/test-utils';
import Counter from '../src/components/Counter.vue';
import CounterParent from '../src/components/CounterParent.vue';

describe ('Counter.vue', () => {
    test('setup correctly', () => {
        const wrapper = mount(Counter)
        expect(true).toBe(true)
    })
})

describe ('CounterParent.vue', () => {
    test('increments the counter value when button is clicked', ()=> {
        const wrapper = mount(CounterParent)
        expect(wrapper.text()).toContain('counter: 0')
        wrapper.find('button').trigger('click')
        expect(wrapper.text()).toContain('counter: 1')
    })
})