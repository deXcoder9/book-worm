
import bannerImage from '../../assets/images/bannerImgae.png';

const Banner = () => {

    return (
        <div className="bannerContainer flex flex-col lg:flex-row">
            <div className='lg:w-[440px] px-4 lg:px-0'>
                <h1 className='lg:text-5xl text-3xl font-bold py-7'>Books to Freshen up your Bookshelf</h1>
                <button className="btn text-white bg-black hover:text-black ">View The List</button>
            </div>
            <div>
                <img className='lg:h-[430px] h-[300px]' src={bannerImage} alt="books" />
            </div>
        </div>
    );
};

export default Banner;