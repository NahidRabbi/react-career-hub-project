import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
           <div className='max-w-6xl mx-auto'>
             <Outlet></Outlet>
             <Header></Header>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;