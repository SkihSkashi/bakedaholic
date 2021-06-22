// Automated ordernumber generator
export function OrderNum() {
    let i = 0;
    i = Math.floor((Math.random() * 90000) + 1);
    return i;
 }

 // implement into db and logic to compare if it exists.
export default OrderNum;