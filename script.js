const active = document.querySelectorAll(".active");
const number = document.querySelector(".number");
const readbtn = document.querySelector(".read-btn");
const circle = document.querySelectorAll(".fa-circle");
number.innerText = active.length;

active.forEach((state) => {
    state.addEventListener("click", () => {
        state.classList.toggle("unread");
        const newNumber = document.querySelectorAll(".unread");
        number.innerText = newNumber.length;
    });
});

readbtn.addEventListener("click", () => {
    active.forEach(markread => markread.classList.remove("unread"));
    const newNumber = document.querySelectorAll(".unread");
    number.innerText = newNumber.length;
});

const comment = document.querySelector(".comment");
const toggleMessage = document.querySelector(".toggle-message");

comment.addEventListener("click", () => {
    toggleMessage.classList.toggle("toggle");
});