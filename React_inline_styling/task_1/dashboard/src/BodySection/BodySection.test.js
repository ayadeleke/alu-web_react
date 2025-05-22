jest.mock('aphrodite', () => ({
  css: (...args) => args.join(' '),
  StyleSheet: { create: styles => styles },
  StyleSheetTestUtils: jest.requireActual('aphrodite').StyleSheetTestUtils,
}));
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<BodySection />', () => {
    it('renders a <BodySection /> component', () => {
        const wrapper = shallow(
        <BodySection title="test h2">
            <p>test p</p>
        </BodySection>
        );
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('h2').length).toEqual(1);
        expect(wrapper.find('h2').text()).toEqual('test h2');
        expect(wrapper.find('p').length).toEqual(1);
        expect(wrapper.find('p').text()).toEqual('test p');
    });
});