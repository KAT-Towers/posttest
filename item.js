//create a class for item
function item(id, name, price)
{
    this.id = id;
    this.name = name;
    this.price = price;
}

// create an array of items
var items =[];

items[0] = new item(1, "iPhone 13", 1,333.00)
items[1] = new item(2, "iPad 11 inch", 799.99)
items[2] = new item(3, "MacBook Air", 1,777.00)

//function to update cart

function updateCheckout()
{
    document.getElementById("cart-link").innerHTML = "Checkout (" + sessionStorage.length + ")";
}

//function to get id of item
function getID(arg)
{
    var counter = 0;
    while(items[counter].name != arg)
    {
        counter++;
    }

    return items[counter].id;
}

//function to add items to cart

function add(arg)
{
    sessionStorage.setItem(items[arg].name, items[arg].price);
    updateCheckout();
}

//function delete items

function removeItem(arg);
{
    sessionStorage.removeItem(arg);
    displayCart(); // display remaining items in cart
    updateCheckout(); //update number in cart
}

//function to display cart
function displayCart()
{
    var total = 0;
    var output= "<table class='table table-hover'>";

    //check to see if the cart is empty
    if (sessionStorage.length == 0)
    {
        document.getElementById("cart").innerHTML = "<h3>Cart is empty!<h3>";
    }

    else
    {
        output += "<tr><th>Image</th><th>Name</th><th>Price</th><th>Delete</th></tr>";//header row

        for ( var x = 0; x < sessionStorage.length; x++)
        {
            var key = sessionStorage.key(x);
            output += "<tr><td><img src='images/img" + getID(key) + ".jpg' width = '50px' height='50px'</td>";//item img
            output += "<td>" + key + "</td><td>" + sessionStorage.getItem(key) + "</td";// name and price
            output += "<td><input type='button' class='btn btn-primary' value='Delete' onclick='remove(\""+ key + "\")'></td></tr>";//delete button
            total += parseFloat(sessionStorage.getItem(key));
        }

        document.getElementById("cart").innerHTML = output;
        document.getElementById("total").innerHTML = "<h3>TOTAL:" + total + "</h3>";
    }

}