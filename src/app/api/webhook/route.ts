// app/api/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { order_id } = await request.json()
        
        if (!order_id) {
            return NextResponse.json({ 
                error: "order_id is required" 
            }, { status: 400 })
        }

        const serverKey = process.env.SECRET_MIDTRANS_SERVER_KEY
        
        if (!serverKey) {
            console.error("SECRET_MIDTRANS_SERVER_KEY not found in env")
            return NextResponse.json({ 
                error: "Server configuration error" 
            }, { status: 500 })
        }

        const auth = Buffer.from(`${serverKey}:`).toString("base64")
        
        const response = await fetch(
            `https://api.sandbox.midtrans.com/v2/${order_id}/status`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${auth}`
                }
            }
        )
        
        if (!response.ok) {
            const error = await response.text()
            console.error("Midtrans API error:", error)
            return NextResponse.json({ 
                error: "Failed to verify payment",
                details: error
            }, { status: response.status })
        }

        const transaction = await response.json()
        console.log("Midtrans response:", transaction)
        
        return NextResponse.json({
            transaction_status: transaction.transaction_status,
            order_id: transaction.order_id,
            gross_amount: transaction.gross_amount
        })
    } catch (error) {
        console.error("Webhook error:", error)
        return NextResponse.json({ 
            error: "Internal server error",
            details: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 })
    }
}