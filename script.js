document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = "blog.html";
    
  });
  
  function inputFieldValueById(id) {
    const inputAmount = document.getElementById(id).value;
    const stringToNumber = parseFloat(inputAmount);
    return stringToNumber;
  }
  
  function getInnerTextById(id) {
    const textOfId = document.getElementById(id).innerText;
    const stringToNumber = parseFloat(textOfId);
    return stringToNumber;
  }



  document.getElementById("history-btn").addEventListener("click", function () {
    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById("card-section").classList.add("hidden");
    document.getElementById("history-btn").classList.add("bg-lime-300");
    document.getElementById("history-btn").classList.remove("bg-white");
    document.getElementById("donation-btn").classList.remove("bg-lime-300");
  });
  document.getElementById("donation-btn").addEventListener("click", function () {
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("card-section").classList.remove("hidden");
    document.getElementById("history-btn").classList.remove("bg-lime-300");
    document.getElementById("history-btn").classList.add("bg-white");
    document.getElementById("donation-btn").classList.add("bg-lime-300");
  });
  
  document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = "./blog.html";
  });









  document.getElementById("donate-btn1").addEventListener("click", function () {
    const amount = inputFieldValueById("amount-input1");
    const balance = getInnerTextById("balance");
    const donatedMoney = getInnerTextById("donate-counter1");
    if (isNaN(amount)) {
      alert("Invalid Amount");
      return;
    }
    if (amount <= 0 || balance < amount) {
      alert("Invalid Amount");
      return;
    }
  
    const newBalance = balance - amount;
    document.getElementById("balance").innerText = newBalance;
  
    const NewDonatedMoney = amount + donatedMoney;
    document.getElementById("donate-counter1").innerText = NewDonatedMoney;
  
    const history = document.createElement("div");
    history.innerHTML = `
            <div class="border-2 border-[#1111111A] shadow-xl rounded-2xl p-5 mb-6">
            <h3 class="text-lg font-bold">
              ${amount} Taka is Donated for Flood at Noakhali, Bangladesh
            </h3>
            <p class="text-lg font-normal">
              Date: ${new Date()}
            </p>
          </div>
    `;
  
  document.getElementById("history-section").appendChild(history);
  document.getElementById("my_modal").showModal();
  document.getElementById("amount-input1").value = "";
  });