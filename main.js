document.getElementById("ageForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const date_of_birth_input = document.getElementById("date-of-birth").value;
  const result = document.getElementById("result");

  if (!date_of_birth_input) {
    result.innerHTML = "📅 Please enter your date of birth.";
    return;
  }

  const date_of_birth = new Date(date_of_birth_input);
  const today = new Date();

  if (date_of_birth > today) {
    result.textContent = "⚠️ Date of birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - date_of_birth.getFullYear();
  let months = today.getMonth() - date_of_birth.getMonth();
  let days = today.getDate() - date_of_birth.getDate();

  if (days < 0) {
    months -= 1;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});
