const copyBtn = document.getElementById("copy");
const ip = document.getElementById("ip");

copyBtn.addEventListener("click", async () => {
  const text = ip.textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const range = document.createRange();
    range.selectNode(ip);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("copy");
    sel.removeAllRanges();
  }
  const original = copyBtn.textContent;
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = original), 1500);
});
