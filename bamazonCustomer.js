

// Prompt user ID of the product they want to buy
// once entered ask quanity they want to buy
// If quanity is zero alert insufficient and cancel order 
// When the quanity is adequate complete order (update sql and display total cost)
var inquirer = require("inquirer");

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "products"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start()
});

function start() {
    inquirer
        .prompt([
            {
                name: "itemNumber",
                type: "input",
                message: "What is the product ID?",
                filter: Number
            },

            {
                name: 'quantity',
                type: 'input',
                message: 'How many would you like to buy?',
                filter: Number
            }
        ])

        .then(function (answer) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, { item_id: answer.itemNumber }, function (err, data) {
                console.log(data)

                if (err) throw err;
                if (data.length === 0) {
                    console.log('ERROR: Invalid Item ID. Please select a valid Item ID.')
                }

                else {
                    var product = data[0];
                    if (answer.quantity <= product.stock_quantity) { console.log("Item has been ordered!");
                
                    var quanityUpdate = 'UPDATE products SET stock_quantity = ' + (product.stock_quantity - answer.quantity) + ' WHERE item_id = ' + answer.itemNumber;
                
                    connection.query(quanityUpdate, function(err, data) {
						if (err) throw err;

						console.log('Your order has been placed! Your total is $' + product.price * answer.quantity);

						connection.end();
					});
                } else {
                    console.log("We're sorry. We do not have enough inventory. Please try again.")
                    start()
                }
                };

            }
        )}
    )};

    // Manager View

    // prompt using a list the menu options
    // Have an overall start switch function with different functions for each option
    // View products for sale
    // Create connection with DB 
    // Use a loop to console.log the choices
    
    // View Low inventory
    // Create connection with DB 
    // Use a loop to console.log the choices with invetory less than X

    // Add to Inventory 
    // Create connection with DB 
    // Use CRUD assignment to update inventory

    // Add New Product 
    // Create connection with DB 
    // Use CRUD assignment to add to inventory


