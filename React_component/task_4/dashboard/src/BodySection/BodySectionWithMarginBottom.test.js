import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('should render a <BodySection /> component with correct props', () => {
    const props = {
      title: 'Test Title',
      children: <p>Test Content</p>,
    };

    const wrapper = shallow(
      <BodySectionWithMarginBottom {...props} />
    );

    const bodySection = wrapper.find(BodySection);
    expect(bodySection).toHaveLength(1);

    // Check props passed to BodySection
    expect(bodySection.props().title).toEqual('Test Title');
    expect(bodySection.props().children).toEqual(<p>Test Content</p>);
  });
});
