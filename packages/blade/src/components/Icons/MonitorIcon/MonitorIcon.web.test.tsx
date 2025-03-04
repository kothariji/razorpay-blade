import MonitorIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.web';

describe('<MonitorIcon />', () => {
  it('should render MonitorIcon', () => {
    const { container } = renderWithTheme(
      <MonitorIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
