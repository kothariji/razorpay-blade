import FileIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<FileIcon />', () => {
  it('should render FileIcon', () => {
    const renderTree = renderWithTheme(
      <FileIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
