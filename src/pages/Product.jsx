import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";


function Product() {
    return (
        <div className="product">
            <Announcement />
            <Navbar />
            <div className="productContainer">
                <div className="imgContainer"></div>
                <div className="infoContainer"></div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
export default Product;