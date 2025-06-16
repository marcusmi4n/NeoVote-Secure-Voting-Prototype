document.getElementById("vote-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const choice = document.querySelector('input[name="candidate"]:checked').value;
  
  // simulate ledger log
  console.log("Vote cast for:", choice);
  document.getElementById("result").innerHTML = `<p>✅ You voted for <strong>${choice}</strong>. Thank you!</p>`;
  
  // TODO: Send to Rust server or store in localStorage
});
