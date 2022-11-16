import { loadStripe } from "@stripe/stripe-js";



export const stripePromise = loadStripe(
    "pk_test_51M4M9fL75KH90CyRchWIG86wSk27AcsYtD7BLVd2QaZuYCqhWyLNrudDRknLQJNK5xRj889W3MkYbx01pUO3RYiX00KR5j2TNM"
)

// process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY