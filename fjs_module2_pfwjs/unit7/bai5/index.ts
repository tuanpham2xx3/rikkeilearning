abstract class PaymentMethod {
  abstract processPayment(amount: number): void;
}

class CreditCardPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} by credit card`);
  }
}

class PaypalPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} by Paypal`);
  }
}

const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PaypalPayment();

creditCardPayment.processPayment(1000000);
paypalPayment.processPayment(500000);
