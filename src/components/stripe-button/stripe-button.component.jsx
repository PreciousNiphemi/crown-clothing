import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
   const onToken = (token)=>{
        console.log(token);
        alert('Payment Successful');

    }
    
        const priceForStripe = price * 100;
        const publishableKey = 'pk_test_51HmguxLJavIKZbTgQGSe4Ezyf26hdda31iJMw4d6tPuKldvqLpKOkxdK0OgAehclwgauVipejhqiwMXeOpI1l67o00hXQE6IiH'
        return(
        <StripeCheckout
        label='Take MY Money'
        name= 'Crown Clothing LTD.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is $${price}`}
        amount ={priceForStripe}
        panelLabel='Take My Money'
        token={onToken}
        stripeKey={publishableKey}
        />
        );
    
};

export default StripeCheckoutButton;