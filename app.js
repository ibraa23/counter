// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      if (count > 0) {
        count--;
      }
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("increase10")) {
      count += 10; // Tambah 10
    } else if (styles.contains("decrease10")) {
      if (count >= 10) { // Pastikan tidak kurang dari 0
        count -= 10; // Kurangi 10
      } else {
        count = 0; // Pastikan count tidak negatif
      }
    } else {
      count = 0; // Reset
    }

    // Perbarui tampilan nilai
    value.textContent = count;

    // Tambahkan efek animasi
    value.classList.add('value-change');
    setTimeout(() => {
      value.classList.remove('value-change');
    }, 200);

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
