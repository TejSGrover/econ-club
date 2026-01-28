const prompts = [
  "Is inflation always bad? Who wins and loses?",
  "Should governments cap rent prices? Trade-offs?",
  "Do tariffs protect jobs or raise costs more?",
  "Is AI replacing jobs creating structural unemployment?",
  "Should there be a universal basic income (UBI)?",
  "What causes currency depreciation and why does it matter?"
];

document.getElementById("random").addEventListener("click", () => {
  const pick = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("topic").textContent = pick;
});
