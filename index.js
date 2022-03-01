// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFav = 'someone';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function  overwriteBestCustomer(best_customer){
  bestCustomer = best_customer;
}

function  changeLeastFavoriteCustomer(){
  leastFav = 'bob';
}
