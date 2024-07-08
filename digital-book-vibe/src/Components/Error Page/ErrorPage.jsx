import { Link } from "react-router-dom";
import errorImage from './404-page-not-found.jpg'
const ErrorPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={errorImage} alt="" />
            <button className="btn bg-black text-white mt-8 hover:text-black">
                <Link to='/'> GO BACK TO HOME</Link>
            </button>
        </div>
    );
};

export default ErrorPage; 