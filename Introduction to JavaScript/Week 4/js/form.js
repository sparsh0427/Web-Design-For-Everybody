function billingFunction(){
    if(document.getElementById('same').checked == true){
        var name = document.getElementById('shippingName').value;
        document.getElementById('billingName').value = name;
        var zip = document.getElementById('shippingZip').value;
        document.getElementById('billingZip').value = zip;
    }
    else{
        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";
    }
}