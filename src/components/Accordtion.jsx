import React from 'react';

const Accordtion = () => {
    return (
        <div className="mx-auto p-4 my-8">
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">1. How can I place an order?</div>
                <div className="collapse-content text-sm">You can place an order by simply browsing our products, adding your selected items to the cart, and proceeding to checkout. You’ll be asked to enter your shipping and payment details to complete the purchase.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">2. What payment methods do you accept?</div>
                <div className="collapse-content text-sm">We accept various payment methods including credit/debit cards, mobile banking (bKash, Nagad, Rocket), and Cash on Delivery (for selected areas).</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">3. How long does delivery take?</div>
                <div className="collapse-content text-sm">Delivery typically takes 2–5 business days depending on your location. We’ll send you a tracking number once your order is shipped.</div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">5. Can I return or exchange a product?</div>
                <div className="collapse-content text-sm">Yes, we have a hassle-free 7-day return/exchange policy for eligible items. Products must be unused and in original packaging.</div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">6. How do I track my order?</div>
                <div className="collapse-content text-sm">Once your order is shipped, you’ll receive a tracking number via email or SMS. You can use this number to track your order on our website or the courier’s site.</div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">7. What should I do if I receive a damaged or wrong product?</div>
                <div className="collapse-content text-sm">We’re sorry for the inconvenience! Please contact our support team within 48 hours of receiving the item, and we’ll arrange a replacement or refund.</div>
            </div>

        </div>
    );
};

export default Accordtion;