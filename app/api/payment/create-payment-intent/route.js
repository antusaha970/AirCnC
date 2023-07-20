import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});
export async function POST(req) {
  try {
    const payment = await req.json();
    if (payment) {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "USD",
        amount: 1000,
        automatic_payment_methods: { enabled: true },
      });
      return NextResponse.json(
        { clientSecret: paymentIntent.client_secret },
        { status: 200 }
      );
    } else {
      return NextResponse.json("No payment information", { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: {
          message: error.message,
        },
      },
      { status: 400 }
    );
  }
}
