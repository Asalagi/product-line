import './saddlery.css';
import Header from './header';
import Footer from './footer';

function Home() {
    return (
        <div className="hb-main-container">     
            <Header></Header>
            <div className="hb-inner-content">
            <div className="inner-content-title">
                <h1>Welcome</h1>
                <p>Welcome to Holly Bake Saddlery, home to a line of top made saddles with premium leather.
                Made to fit you and your horse to perfection. 
            </p>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;