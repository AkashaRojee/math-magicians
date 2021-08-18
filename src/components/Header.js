import WebsiteTitle from './WebsiteTitle';
import NavigationBar from './NavigationBar';
import SplitPane from './SplitPane';

const Header = () => (
  <SplitPane
    left={<WebsiteTitle />}
    right={<NavigationBar />}
  />
);

export default Header;
