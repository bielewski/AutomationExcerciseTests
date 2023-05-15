# AutomationExcercise Tests

# Goal
Automate test cases of https://automationexercise.com/

# Objectives of the project
- [x] Page Object Pattern usage
- [x] cross-browser testing
- [x] test execution configuration
- [x] test execution logging
- [x] test retries on failure
- [ ] screenshots

# Used frameworks and technologies
- Playwright
- TypeScript

# File structure destription
- pages - contains page object classes representing pages of the application
- tests - contains test cases
- playwright.config.ts - contains configuration and properties of the project
- global-setup.ts - contains global variables

# Covered test cases
- [x] 1. Register user

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/login'
3. Verify 'New User Signup!' is visible
4. Enter name and email address
5. Click 'Signup' button
6. Verify that 'ENTER ACCOUNT INFORMATION' is visible
7. Fill details: Title, Name, Email, Password, Date of birth
8. Select checkbox 'Sign up for our newsletter!'
9. Select checkbox 'Receive special offers from our partners!'
10. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
11. Click 'Create Account button'
12. Verify that 'ACCOUNT CREATED!' is visible
13. Click 'Continue' button
14. Verify that 'Logged in as username' is visible
15. Click 'Delete Account' button
16. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

</details>

- [x] 2. Register user with existing email

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible

</details>

- [x] 3. Login user with correct email and password

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as Test' is visible

</details>

- [x] 4. Login User with incorrect email and password

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible

</details>

- [x] 5. Logout user

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page

</details>

- [ ] 6. Contact Us Form

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully

</details>

- [ ] 7. Verify All Products and product detail page

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

</details>

- [ ] 8. Search product

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible

</details>

- [ ] 9. Add products to cart

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price

</details>

- [ ] 10. Verify product quantity in Cart

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'View Product' for any product on home page
5. Verify product detail is opened
6. Increase quantity to 4
7. Click 'Add to cart' button
8. Click 'View Cart' button
9. Verify that product is displayed in cart page with exact quantity

</details>

- [ ] 11. Place order

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify ' Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify Address Details and Review Your Order
13. Enter description in comment text area and click 'Place Order'
14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
15. Click 'Pay and Confirm Order' button
16. Verify success message 'Your order has been placed successfully!'
17. Click 'Delete Account' button
18. Verify 'ACCOUNT DELETED!' and click 'Continue' button

</details>

- [ ] 12. Place order: Register while checkout

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Signup and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12. Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify success message 'Your order has been placed successfully!'
19. Click 'Delete Account' button
20. Verify 'ACCOUNT DELETED!' and click 'Continue' button

</details>

- [ ] 13. Remove product from cart

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click 'X' button corresponding to particular product
8. Verify that product is removed from the cart

</details>

- [ ] 14. View category page

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that categories are visible on left side bar
4. Click on 'Women' category
5. Click on any category link under 'Women' category, for example: Dress
6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
7. On left side bar, click on any sub-category link of 'Men' category
8. Verify that user is navigated to that category page

</details>

- [ ] 15. View brand page

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products

</details>

- [x] 16. Add review for product

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com/product_details/1'
3. Verify 'Write Your Review' is visible
4. Enter name, email and review
5. Click 'Submit' button
6. Verify success message 'Thank you for your review.'

</details>

- [ ] 17. Add to cart from Recommended Items

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Scroll to bottom of page
4. Verify 'RECOMMENDED ITEMS' are visible
5. Click on 'Add To Cart' on Recommended product
6. Click on 'View Cart' button
7. Verify that product is displayed in cart page

</details>

- [ ] 18. Verify Scroll Up using 'Arrow' button and Scroll Down functionality

<details>
<summary>Expand</summary>

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Click on arrow at bottom right side to move upward
7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

</details>

# What's next?
- [ ] creating users accounts through API
- [ ] deleting users accounts through API
