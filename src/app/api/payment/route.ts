import { NextRequest, NextResponse } from "next/server";
import Midtrans from "midtrans-client";

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET_MIDTRANS_SERVER_KEY!,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!,
})

export async function POST(request: NextRequest) {
  const productId = `DEHOMESPA-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const { price } = await request.json();

  const parameter = {
    transaction_details: {
      order_id: productId,
      gross_amount: Number(price),
    },
    callbacks: {
      finish: `${process.env.NEXT_PUBLIC_APP_URL}/thanks?order_id=${productId}`,
      error: `${process.env.NEXT_PUBLIC_APP_URL}/failed_payment?order_id=${productId}`,
      pending: `${process.env.NEXT_PUBLIC_APP_URL}/pending?order_id=${productId}`,
    }
  }

  const transaction = await snap.createTransaction(parameter)
  console.log(transaction)
  return NextResponse.json({ 
    token: transaction.token,
    redirect_url: transaction.redirect_url,
    order_id: productId,
   })
}

