import { knowledgeBase, medicineRecommendations, doctorTypes, selfCareAdvice } from './knowledgeBase.js';

let diagnosisHistory = [];

document.getElementById('diagnoseBtn').addEventListener('click', diagnose);
document.getElementById('historyBtn').addEventListener('click', viewHistory);

function diagnose() {
  const inputElem = document.getElementById("symptomInput");
  const errorElem = document.getElementById("inputError");
  const resultElem = document.getElementById("result");
  const loadingElem = document.getElementById("loading");
  errorElem.textContent = '';
  resultElem.innerHTML = '';

  const rawInput = inputElem.value.trim();
  if (!rawInput) {
    errorElem.textContent = "Please enter at least one symptom.";
    return;
  }

  loadingElem.classList.remove("hidden");

  setTimeout(() => { // Simulate diagnosis delay
    const symptoms = rawInput.split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
    if (!symptoms.length) {
      errorElem.textContent = "Please enter valid symptoms.";
      loadingElem.classList.add("hidden");
      return;
    }

    const possibleDiseases = new Set();
    const medicines = new Set();
    const doctors = new Set();
    const advice = new Set();

    symptoms.forEach(symptom => {
      (knowledgeBase[symptom] || []).forEach(disease => {
        possibleDiseases.add(disease);
        (medicineRecommendations[disease] || []).forEach(med => medicines.add(med));
        (doctorTypes[disease] || []).forEach(doc => doctors.add(doc));
        if (selfCareAdvice[disease]) advice.add(selfCareAdvice[disease]);
      });
    });

    if (!possibleDiseases.size) {
      resultElem.innerHTML = `<div class="error">No likely diseases found for entered symptoms. Try different or more specific symptoms.</div>`;
      loadingElem.classList.add("hidden");
      return;
    }

    // Save history
    diagnosisHistory.push({
      date: new Date().toLocaleString(),
      symptoms,
      diseases: [...possibleDiseases],
      medicines: [...medicines],
      doctors: [...doctors],
      advice: [...advice]
    });

    resultElem.innerHTML = `
      <h2>Diagnosis Result</h2>
      <p><strong>Possible Diseases:</strong> ${[...possibleDiseases].join(', ')}</p>
      <p><strong>Suggested Medicines:</strong> ${[...medicines].join(', ')}</p>
      <p><strong>Specialist to Consult:</strong> ${[...doctors].join(', ')}</p>
      <p><strong>Self-Care Advice:</strong> ${[...advice].join('<br>')}</p>
    `;
    loadingElem.classList.add("hidden");
  }, 800);
}

function viewHistory() {
  const historyElem = document.getElementById("history");
  if (!diagnosisHistory.length) {
    historyElem.innerHTML = "<p>No diagnosis history available.</p>";
  } else {
    historyElem.innerHTML = diagnosisHistory.map((entry, idx) => `
      <div>
        <strong>Diagnosis ${idx+1} (${entry.date})</strong><br>
        <em>Symptoms:</em> ${entry.symptoms.join(', ')}<br>
        <em>Diseases:</em> ${entry.diseases.join(', ')}<br>
        <em>Medicines:</em> ${entry.medicines.join(', ')}<br>
        <em>Doctors:</em> ${entry.doctors.join(', ')}<br>
        <em>Self-Care:</em> ${entry.advice.join('<br>')}
      </div>
      <hr>
    `).join('');
  }
  historyElem.classList.remove("hidden");
  setTimeout(() => historyElem.classList.add("hidden"), 9000); // Hide after 9s
}