let totalPrice = 0;
let productCount = 0;
let isClicked = false;
const delivery = 50;
const shipping = 100;
const tax = 20;

document.getElementById('total-product').innerText = productCount;
document.getElementById('price').innerText = 00;
document.getElementById('delivery').innerText = delivery;
document.getElementById('shipping').innerText = shipping;
document.getElementById('total-price').innerText = totalPrice;
document.getElementById('tax').innerText = tax;
document.getElementById('total-with-tax').innerText = 0;

function myCardCalculation(event){
    if(!isClicked){
        const cartElem = event.target.parentElement;
        const price = cartElem.children[2].children[0].innerText;
        totalPrice += parseInt(price) + delivery + shipping;
        productCount++;

        document.getElementById('total-product').innerText = productCount;
        document.getElementById('price').innerText = price;
        document.getElementById('delivery').innerText = delivery;
        document.getElementById('shipping').innerText = shipping;
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('tax').innerText = tax;
        document.getElementById('total-with-tax').innerText = totalPrice + tax;
    }
}

function checkOut(){
    if(productCount <= 0){
        Swal.fire(
            {
                tittle : 'Error',
                text : 'Please, select at least one item.',
                icon : 'error',
                confirmButtonText : 'Ok'
            }
        );
        return;
    }
    Swal.fire(
        {
            tittle : 'Order',
            html : `Your total items are <h3 style="display:inline;">${productCount}</h3> <br>Total Price With Tax <h2 style="display:inline;">${totalPrice + tax}</h2>`,
            icon : 'success',
            confirmButtonText : 'Ok'
        }
    );
}