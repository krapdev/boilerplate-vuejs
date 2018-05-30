import { shallow } from '@vue/test-utils';
import Hello from './Hello';

test('should contain default message', () => {
  // when
  const wrapper = shallow(Hello);
  // then
  const title = wrapper.find('h1');
  expect(title.text()).toContain('Welcome to Your Vue.js App');
});
