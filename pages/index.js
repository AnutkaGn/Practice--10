import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';
import Sidebar from '../components/SideBar/SideBar';

function Index() {
  return (
    <div className="app-container">
      <Header title="Header" />
      <div className="main-content">
        <Sidebar title="Menu" />
        <Content title="Content" />
      </div>
      <Footer title="Footer" />
    </div>
  );
}

export default Index;
