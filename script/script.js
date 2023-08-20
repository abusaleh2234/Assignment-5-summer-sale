let total = 0;
function clickHendler(product){
    const selectItem = document.getElementById('select-product');
    const itemName =  product.childNodes[3].childNodes[3].innerText;

    const count = selectItem.childElementCount;

    const p = document.createElement('p');
    p.innerText =  (count + 1) + ".  " +  itemName;
    p.classList.add('text-xl')
    p.classList.add('font-semibold')
    
    const totalPrice = document.getElementById('total-price');
    const productPrice = product.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const Price = parseFloat(productPrice );
    total += Price;
    totalPrice.innerText = total;
    // document.getElementById('total').innerText = total;
    
    if( total > 0){
        document.getElementById("purchase-btn").disabled = false;
        if(total >= 200){
            document.getElementById("apply-btn").disabled = false;
        }
    }
    selectItem.appendChild(p)
    
   
}
function backHomePage(back){
    window.location.href = "http://127.0.0.1:5500/index.html";
    // const selectItem = document.getElementById('select-product')
    // selectItem.appendChild()
    // document.getElementById('total-price').innerText = "00";
    // document.getElementById('total').innerText = "00";
    // document.getElementById("total-discount").innerText = "00";
    // console.log("home click");
}

function cuponApply(where){
    const cuponFild = document.getElementById('cupon-code');
    const cuponValue = cuponFild.value;
    cuponFild.value = "";
    
    if(cuponValue === "SELL200"){
        const discountcalculet =(total*0.20).toFixed(2)
        const discountThenTotal = total - discountcalculet;
        document.getElementById('total-discount').innerText = discountcalculet;

        document.getElementById('total').innerText = discountThenTotal;
    } 
    // else{
    //     document.getElementById('total').innerText = total;
    // }
    
}
