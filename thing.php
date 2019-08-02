<?php
ini_set('max_execution_time', 0);

$curl1 = curl_init();

curl_setopt_array($curl1, array(
    CURLOPT_URL => "https://api.bigcommerce.com/stores/t0qyujsmht/v3/catalog/products?limit=250&page=1",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
        "Accept: application/json",
        "Cache-Control: no-cache",
        "X-Auth-Client: o3o86hjrhjks3qd3el073y8dml2awmx",
        "X-Auth-Token: blnhv3qmy8au91m0875ycnp5oeifrgp",
    ),
));

$response1 = curl_exec($curl1);
$err1 = curl_error($curl1);

curl_close($curl1);

if ($err1) {
    echo "cURL Error #1:" . $err1;
} else {
    $decoder = json_decode($response1, true);
    $maxPages = $decoder['meta']["pagination"]["total_pages"];

    for ($page = 0; $page <= $maxPages; $page++) {

// start next api

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.bigcommerce.com/stores/t0qyujsmht/v3/catalog/products?limit=250&page=" . $page,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_POSTFIELDS => "{\n\t\"name\": \"designers\",\n\t\"active\": false\n}",
            CURLOPT_HTTPHEADER => array(
                "Accept: application/json",
                "Cache-Control: no-cache",
                "Content-Type: application/json",
                "X-Auth-Client: o3o86hjrhjks3qd3el073y8dml2awmx",
                "X-Auth-Token: blnhv3qmy8au91m0875ycnp5oeifrgp",
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        if ($err) {
            echo "cURL Error #2:" . $err;
        } else {
            // echo 'API 1 Complete';
            curl_close($curl);

            echo($response);

// start next api

            $data = json_decode($response);
            $nuArray = array();

            foreach ($data->data as $cost) {
                $innerArray = array();
                $innerArray["price"] = $cost->cost_price * 1.48;
                $innerArray["sku"] = $cost->sku;
                $innerArray["currency"] = "usd";
                array_push($nuArray, $innerArray);
            }
            $json = json_encode($nuArray);

            $curl2 = curl_init();

            curl_setopt_array($curl2, array(
                CURLOPT_URL => "https://api.bigcommerce.com/stores/t0qyujsmht/v3/pricelists/2/records",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "PUT",
                CURLOPT_POSTFIELDS => $json,
                CURLOPT_HTTPHEADER => array(
                    "Accept: application/json",
                    "Cache-Control: no-cache",
                    "Content-Type: application/json",
                    "X-Auth-Client: a2amj8ms2zv6i3iyd0inix64jzdrl34",
                    "X-Auth-Token: 5ifw6nj3typs8y7uuyyavlfwixf3gl0",
                ),
            ));

            $response2 = curl_exec($curl2);
            $err2 = curl_error($curl2);

            curl_close($curl2);

            if ($err2) {
                echo "cURL Error #3:" . $err2;
            } else {
                // echo "API 2 Complete";
            }
        }
    }
    ini_set('max_execution_time', 90);
}
