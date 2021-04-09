console.log("Hello Puppydog!");

const inputs = document.querySelectorAll(".input");

const page = document.querySelector(".page");

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  page.style.setProperty(`--${this.name}`, ` ${this.value}${suffix}`);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

