// business logic အရ တစ်ခါထပ်ပိုလုပ်ခွင့်မပေးချင်တဲ့ func တွေကိုပိတ်လို့ရ

let once = (fn) => {
    let done = false;
    return () => done ? undefined : ((done = true), fn());  // if func have done once it returns undefined
}

processPayment = () => console.log(`Process Payment`);

let paymentOnce = once(processPayment);
paymentOnce();
console.log(paymentOnce());  // undefined
