<?php

namespace App\Helpers;

use Midtrans\Config;

class MidtransConfig
{
    public static function init()
    {
        Config::$serverKey = 'SB-Mid-server-g0gr-NSDT0KnlBZcBS2LTy7-'; 
        Config::$isProduction = false;
        Config::$isSanitized = true;
        Config::$is3ds = true;
    }
}