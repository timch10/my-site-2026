function sayHello() {
    // 1. Находим поле ввода по его ID
    const nameInput = document.getElementById('userName');
    
    // 2. Берем то, что пользователь там напечатал
    const name = nameInput.value;

    // 3. Если имя введено, показываем окно
    if (name !== "") {
        alert("Спасибо, " + name + "! Твое сообщение (якобы) отправлено.");
    } else {
        alert("Пожалуйста, введи свое имя!");
    }
}
