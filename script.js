document.addEventListener("DOMContentLoaded", (event) => {
  const testo1 = document.getElementById("testo1");
  const testo2 = document.getElementById("testo2");
  const risultato = document.getElementById("risultato");
  const confrontaBtn = document.getElementById("confronta");

  confrontaBtn.addEventListener("click", () => {
    const text1 = testo1.value;
    const text2 = testo2.value;
    const diff = diffTexts(text1, text2);
    risultato.innerHTML = diff;
  });

  function diffTexts(text1, text2) {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    let result = "";

    for (let i = 0; i < Math.max(lines1.length, lines2.length); i++) {
      const line1 = lines1[i] || "";
      const line2 = lines2[i] || "";

      if (line1 !== line2) {
        result += `<span class="diff">${line1}</span>\n`;
      } else {
        result += `${line1}\n`;
      }
    }

    return result;
  }
});
