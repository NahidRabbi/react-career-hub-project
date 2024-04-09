import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Header></Header>
        </div>
    );
};

export default Root;