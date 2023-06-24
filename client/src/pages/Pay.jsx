import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
const KEY = "pk_test_51NMaB1GCfcMEheIV2C9Bkc8I0fLDihdt5yJc2gd8orYlhqPsAYL93Z7N5g8mcsFdm7fo8GfK550nN4RF5Qdp3IfH00dmtrgbxU"



function Pay() {

    const [stripeToken, setStripeToken] = useState(null);

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:3000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                });
                console.log(res.data);

            } catch (err) {
                console.log(err);
            }
        }

        stripeToken && makeRequest();
    }, [stripeToken]);

    function onToken(token) {
        setStripeToken(token);
    }
    return (
        <StripeCheckout
            name="Lama Shop"
            billingAddress
            shippingAddress
            description="Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
        >
            <button>Pay</button>
        </StripeCheckout>

    );
}

export default Pay;