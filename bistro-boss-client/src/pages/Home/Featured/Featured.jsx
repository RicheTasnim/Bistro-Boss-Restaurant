import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>

            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 opacity-70'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Jul-5, 2015</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, placeat molestiae illo molestias quas odit vel recusandae laudantium repellendus atque consequuntur nihil iure mollitia ab facilis provident, ea fugit sed. Suscipit quidem sapiente voluptatibus! Quia.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;