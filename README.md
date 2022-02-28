# AM Coding Challenge - Frontend (React)

## The case study: Product Order Dashboard

![AM Order Dashboard Challenge](https://github.com/AM-code-treasure/coding-challenge-frontend-react/blob/main/Order-Dashboard-v2.png)

Monitoring their order target vs. actual orders is a typical problem for growing product businesses.
To tackle that challenge, BLACK PRODUCTS Inc. wants to build an "order dashboard" - the software you will develop!

The orders are stored in a Google sheet and need to be displayed using the [Google-Sheet API](https://developers.google.com/sheets/api)

## Product Requirements

As an employee at BLACK PRODUCTS Inc.,

-   [ ] I want to see the sum of all orders for a given month
-   [ ] I want to be able to filter by month
-   [ ] I want to see a progress bar, that shows the current order volume (X%) vs. the order target (100%)
-   [ ] I want to see the target value
-   [ ] I want to see the 5 most recent orders in the selected month
-   [ ] For each order, I want to see
    -   [ ] the order number
    -   [ ] the order date
    -   [ ] the product name
    -   [ ] the order volume
-   [ ] I want to see the top 5 products for the time period
-   [ ] For each top product, I want to see
    -   [ ] the name of the product
    -   [ ] the sum of all orders of that product
    -   [ ] a progress bar to display the percentage that the product had on the total order volume
-   [ ] The dashboard refreshes regularly and displays a counter, when the next refresh will happen
