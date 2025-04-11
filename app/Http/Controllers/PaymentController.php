<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Midtrans\Config;
use Midtrans\Snap;

class PaymentController extends Controller
{
    public function createSnapToken(Request $request)
    {
        // Set Midtrans config dengan nilai dari .env
        Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        Config::$isProduction = env('MIDTRANS_IS_PRODUCTION', false);
        Config::$isSanitized = true;
        Config::$is3ds = true;

        // Misalnya, data transaksi berasal dari item yang dipilih
        // Pastikan request mengirimkan minimal: order_id, gross_amount,
        // dan data customer jika dibutuhkan.
        $params = [
            'transaction_details' => [
                'order_id' => 'order-' . time(), // atau gunakan ID transaksi item dari database
                'gross_amount' => $request->gross_amount, // total harga item (misal dalam rupiah)
            ],
            'customer_details' => [
                'first_name' => $request->first_name,
                'last_name'  => $request->last_name,
                'email'      => $request->email,
                'phone'      => $request->phone,
            ],
            // Bisa tambahkan item_details, custom_field, dll.
        ];

        try {
            $snapToken = Snap::getSnapToken($params);
            return response()->json(['snapToken' => $snapToken]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
