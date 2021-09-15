import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './home.scss';

export default function Home() {
    return (
        <div className="homepage">
            <Header/>
            <div className="container">
                <Posts/>
                <Sidebar/>
            </div>
        </div>
    )
}
