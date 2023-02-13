import PackageIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<PackageIcon />', () => {
  it('should render PackageIcon', () => {
    const renderTree = renderWithTheme(
      <PackageIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});