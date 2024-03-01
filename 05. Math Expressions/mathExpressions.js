var num1 = 9;
var num2 = 7;
document.write("<h1>QUESTION NO.1 </h1>");
document.write("<h2>Sum of " + num1 + " + " + num2 + " is 16 </h2>");

document.write("<h1>QUESTION NO.2 </h1>");
document.write("<h2>Sum of " + num1 + " - " + num2 + " is 2 </h2>");
document.write("<h2>Sum of " + num1 + " * " + num2 + " is 63 </h2>");
document.write("<h2>Sum of " + num1 + " / " + num2 + " is 1.28 </h2>");

document.write("<h2>QUESTION NO.3 </h2>");
var num3;
document.write("<p>Value after variable declaration is: ?? </p>");
var num3 = 3;
document.write("<p>Initial Value: 3 </p>");
var num3 = num3 + 1;
document.write("<p>Value after increment is: 4 </p>");
var num3 = num3 + 7;
document.write("<p>Value after addition is: 11 </p>");
var num3 = num3 - 1;
document.write("<p>Value after decrement is: 10 </p>");
var num3 = num3 / 3;
document.write("<p>The remainder is : 3.33 </p>");

var ticketPrice = 500;
var ticketPrice = ticketPrice * 7;
document.write("<h2>QUESTION NO.4 </h2>");
document.write(" <p>One ticket Cost = 500 </p> ");
document.write(
  "<p>Total cost to buy 7 tickets to a movie is " + ticketPrice + "</p>"
);

document.write("<h2>QUESTION NO.5 </h2>");
document.write("<p>1 * 1 = 1 </p>");
document.write("<p>1 * 2 = 2 </p>");
document.write("<p>1 * 3 = 3 </p>");
document.write("<p>1 * 4 = 4 </p>");
document.write("<p>1 * 5 = 5 </p>");
document.write("<p>1 * 6 = 6 </p>");
document.write("<p>1 * 7 = 7 </p>");
document.write("<p>1 * 8 = 8 </p>");
document.write("<p>1 * 9 = 9 </p>");
document.write("<p>1 * 10 = 10 </p>");

document.write("<h2>QUESTION NO.6 </h2>");
document.write("<h3>Shopping Cart </h3>");
var item1 = 250;
var item2 = 300;
var item1_quantity = 2;
var item2_quantity = 1;
var shippingCharges = 150;
var totalcost = item1 + item1 + item2 + shippingCharges;

document.write("<p>Price of item 1 is " + item1 + "</p>");
document.write("<p>Quantity of item 1 is " + item1_quantity + "</p>");
document.write("<p>Price of item 2 is " + item2 + "</p>");
document.write("<p>Quantity of item 2 is " + item2_quantity + "</p>");
document.write("<p>Shipping Charges " + shippingCharges + "</p>");
document.write("<p>Total Cost of your order is: " + totalcost + "</p>");

document.write("<h2>QUESTION NO.7 </h2>");
document.write("<h3>Marksheet </h3>");
var totalmarks = 550;
var obtainedmarks = 490;
var percentage = obtainedmarks / totalmarks;
var totalpercentage = percentage * 100;
document.write("<p>Total Marks:" + totalmarks + "</p>");
document.write("<p>Obtained Marks:" + obtainedmarks + "</p>");
document.write("<p>Percentage:" + totalpercentage + "</p>");

document.write("<h2>QUESTION NO.8 </h2>");
var totalUSdollar = 10;
var totalRiyal = 25;
var usDollar = 104.8;
var riyal = 28;
var dollar_in_pkr = usDollar * totalUSdollar;
var riyal_in_pkr = riyal * totalRiyal;
var total_pkr = dollar_in_pkr + riyal_in_pkr;
document.write("<p>Total Currency in pkr is: " + total_pkr + "</p>");

document.write("<h2>QUESTION NO.9 </h2>");
var num5 = 8;
var num6 = num5 + 5;
var num7 = num6 * 10;
var num8 = num7 / 2;
document.write("<p>First Number " + num5 + "</p>");
document.write("<p>Add 5: " + num6 + "</p>");
document.write("<p>Multiply by 10: " + num7 + "</p>");
document.write("<p>Divide by 2: " + num8 + "</p>");

document.write("<h2>QUESTION NO.10 </h2>");
document.write("<h3>Age Calculator </h3>");
var birthYear = 2000;
var currentYear = 2024;
var age = 24;
document.write("<p>Current Year: " + currentYear + "</p>");
document.write("<p>Birth Year: " + birthYear + "</p>");
document.write("<p>Age: " + age + "</p>");

document.write("<h2>QUESTION NO.11 </h2>");
document.write("<h3>The Geometrizer </h3>");
document.write("<p>Radius of a circle is: 20</p>");
document.write("<p>Circumference of a circle is: 125.67999999</p>");
document.write("<p>Area of a circle is: 1256.8</p>");

document.write("<h2>QUESTION NO.12 </h2>");
document.write("<h3>The Life Time Supply Calculator </h3>");
var favouriteSnack = "Chips";
var age = 20;
var estimateAaximumAge = 50;
var amountPerDay = 2;
var totalChips = 30 * amountPerDay;
document.write("<p>Favourite Snack: " + favouriteSnack + "</p>");
document.write("<p>Current Age: " + age + "</p>");
document.write("<p>Estimated Maximum Age: " + estimateAaximumAge + "</p>");
document.write("<p>Amount of Snacks per day: " + amountPerDay + "</p>");
document.write(
  "<p>You will need " +
    totalChips +
    " chips to last you until the ripe old age of 50</p>"
);
