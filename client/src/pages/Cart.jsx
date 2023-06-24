import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import './cart.css';

function Cart() {
    return (
        <div className="cart">
            <Announcement />
            <Navbar />
            <div className="cartContainer">
                <h1> YOUR BAG</h1>
                <div className="top">
                    <div className="continueButton">
                        <button>CONTINUE SHOPPING</button>
                    </div>

                    <div className="topTexts">
                        <span>Shopping Bag (2)</span>
                        <span>Your Wishlist (0)</span>
                    </div>

                    <div className="checkoutButton">
                        <button>CHECKOUT NOW</button>
                    </div>

                </div>
                <div className="bottom">
                    <div className="info">
                        <div className="product">
                            <div className="productDetail">
                                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                                <div className="details">
                                    <b>Product:</b> HAKURA T-SHIRT

                                    <b>ID:</b> 93813718293

                                    <b>Size:</b> M
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="quantityContainer">
                                    + <div className="quantity">2</div> -
                                </div>
                                <div className="price">
                                    <span> $20</span>
                                </div>
                            </div>
                        </div>

                    </div>




                    <div className="summary">
                        <h1>Order summary</h1>
                        <div className="summaryItems">
                            <div className="summaryItem">
                                <span>Subtotal</span>  <span>$ 80</span>
                            </div>
                            <div className="summaryItem">
                                <span>Estimated Shipping</span>  <span>$ 5.90</span>
                            </div>
                            <div className="summaryItem">
                                <span>Shipping Discount</span>  <span>$ -5.90</span>
                            </div>
                            <hr />
                            <div className="summaryTotal">
                                <span>Total</span>  <span>$ 80</span>
                            </div>
                            <hr />
                        </div>
                        <button>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default Cart;