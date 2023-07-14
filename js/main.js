function checkFields() {
    const field1Value = document.getElementById("field1").value;
    const field2Value = document.getElementById("field2").value;

    if (field1Value !== "" && field2Value !== "") {
      alert("Обидва поля заповнені");
    } else {
      alert("Не всі поля заповнені");
    }
  }

function checkSum() {
    const poleOneValue = parseInt(document.getElementById("poleOne").value);
    const poleTwoValue = parseInt(document.getElementById("poleTwo").value);
    const sum = poleOneValue + poleTwoValue;

    if (sum > 10) {
      alert("Сума більша за 10");
    } else {
      alert("Сума менша або дорівнює 10");
    }
  }

function checkText() {
    const inputText = document.getElementById("textInput").value;
    const containsJavaScript = inputText.includes("JavaScript");

    if (containsJavaScript) {
      alert("Текст містить слово JavaScript");
    } else {
      alert("Текст не містить слово JavaScript");
    }
  }

function checkNumbers() {
    const inputNumber = parseInt(document.getElementById("numberInput").value);

    if (inputNumber > 10 && inputNumber < 20) {
      alert("Число входить в діапазон від 10 до 20");
    } else {
      alert("Число не входить в діапазон від 10 до 20");
    }
  }

function validateForm() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
      window.location.href = "інша_сторінка.html";
    } else {
      alert("Помилка! Перевірте правильність введених даних.");
    }
  }
