
const msg1 = `Delivered! 🚗✨
Have a nice day!`;

const msg2 = `Delivered! 🚗✨
Add me as a Favorite Shopper anytime so I can grab your future orders.
Thanks again!`;

const msg3 = `On the way now 🚗
ETA shortly.`;

const msg4 = `Quick update 🚗
Running a few minutes behind but heading your way.
Thank you for your patience.`;

function copyMsg(text) {
  navigator.clipboard.writeText(text).then(() => {
    document.getElementById("status").innerText =
      "Copied — ready to paste";
  });
}