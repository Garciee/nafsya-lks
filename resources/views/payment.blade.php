<!DOCTYPE html>
<html>
<head>
    <title>payment gateway</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
    <div  class="flex justify-center items-center ">
    <h1 class="text-6xl font-bold font-stretch-75% font-sans justify-center items-center">BAYAR SEKARANG?</h1>
    </div>
    <div class="flex justify-center items-center ">
        <p>pinles.com</p>
    </div>
    <div class="flex justify-center items-center">
    <button id="pay-button" class="bg-green-500 py-2 px-3 rounded-b-md hover:bg-green-800 text-white shadow-2xs">bayar</button>
</div>
    <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="SB-Mid-client-fePgYyUhJrw9KuE1"></script>
    <script>
        document.getElementById('pay-button').addEventListener('click', function () {
            fetch('/get-snap-token')
                .then(response => response.json())
                .then(data => {
                    window.snap.pay(data.snap_token, {
                        onSuccess: function(result) {
                            alert("Pembayaran sukses!");
                            console.log(result);
                        },
                        onPending: function(result) {
                            alert("Menunggu pembayaran...");
                            console.log(result);
                        },
                        onError: function(result) {
                            alert("Pembayaran gagal!");
                            console.log(result);
                        },
                        onClose: function() {
                            alert('Anda menutup popup tanpa menyelesaikan pembayaran');
                        }
                    });
                });
        });
    </script>
    </div>

    
</body>
</html>