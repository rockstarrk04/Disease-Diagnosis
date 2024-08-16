const knowledgeBase = {
    "fever": ["flu", "malaria", "dengue", "typhoid", "COVID-19", "pneumonia"],
    "cough": ["flu", "cold", "tuberculosis", "bronchitis", "COVID-19", "asthma"],
    "headache": ["flu", "malaria", "cold", "migraine", "sinusitis", "COVID-19"],
    "sore throat": ["flu", "cold", "strep throat", "COVID-19"],
    "fatigue": ["flu", "malaria", "anemia", "COVID-19", "depression"],
    "chills": ["flu", "malaria", "dengue", "COVID-19"],
    "nausea": ["flu", "gastroenteritis", "food poisoning", "typhoid"],
    "vomiting": ["flu", "gastroenteritis", "food poisoning", "typhoid"],
    "diarrhea": ["gastroenteritis", "food poisoning", "cholera", "typhoid"],
    "muscle pain": ["flu", "dengue", "COVID-19", "fibromyalgia"],
    "sneezing": ["cold", "allergy", "hay_fever"],
    "chest pain": ["heart attack", "angina", "pneumonia", "pulmonary embolism"],
    "shortness of breath": ["asthma", "COPD", "heart failure", "pulmonary embolism"],
    "abdominal pain": ["appendicitis", "gallstones", "kidney stones", "ulcers"],
    "rash": ["measles", "chickenpox", "allergic reaction", "eczema"],
    "joint pain": ["arthritis", "lupus", "gout", "lyme disease"],
    "swollen lymph nodes": ["infection", "lymphoma", "HIV", "mononucleosis"],
    "weight loss": ["cancer", "diabetes", "hyperthyroidism", "HIV"],
    "night sweats": ["tuberculosis", "lymphoma", "menopause", "hyperthyroidism"]
};

const medicineRecommendations = {
    "flu": ["Paracetamol", "Rest", "Fluids"],
    "malaria": ["Chloroquine", "Artemisinin-based combination therapies (ACTs)"],
    "dengue": ["Acetaminophen", "Hydration", "Rest"],
    "typhoid": ["Antibiotics", "Fluids", "Rest"],
    "cold": ["Antihistamines", "Decongestants", "Rest"],
    "tuberculosis": ["Isoniazid", "Rifampin", "Pyrazinamide"],
    "bronchitis": ["Cough syrup", "Bronchodilators", "Rest"],
    "migraine": ["Pain relievers", "Triptans", "Anti-nausea medications"],
    "sinusitis": ["Nasal corticosteroids", "Decongestants", "Pain relievers"],
    "food_poisoning": ["Oral rehydration solutions", "Antibiotics (for bacterial infections)"],
    "pregnancy": ["Prenatal vitamins", "Iron supplements", "Folic acid"],
    "allergy": ["Antihistamines", "Decongestants", "Corticosteroids"],
    "hay_fever": ["Antihistamines", "Nasal sprays", "Eye drops"],
    "anemia": ["Iron supplements", "Vitamin B12", "Folic acid"],
    "diabetes": ["Insulin", "Metformin", "Diet control"],
    "thyroid_problems": ["Levothyroxine", "Methimazole", "Beta blockers"],
    "heart_attack": ["Aspirin", "Nitroglycerin", "Beta blockers"],
    "angina": ["Nitrates", "Beta blockers", "Calcium channel blockers"],
    "pneumonia": ["Antibiotics", "Cough medicine", "Fever reducers"],
    "pulmonary_embolism": ["Anticoagulants", "Thrombolytics", "Compression stockings"],
    "asthma": ["Inhalers", "Corticosteroids", "Bronchodilators"],
    "COPD": ["Bronchodilators", "Steroids", "Oxygen therapy"],
    "heart_failure": ["Diuretics", "ACE inhibitors", "Beta blockers"],
    "appendicitis": ["Antibiotics", "Surgery"],
    "gallstones": ["Pain relievers", "Surgery", "Ursodeoxycholic acid"],
    "kidney_stones": ["Pain relievers", "Hydration", "Alpha blockers"],
    "ulcers": ["Proton pump inhibitors", "Antacids", "Antibiotics (for H. pylori)"],
    "gastroenteritis": ["Oral rehydration solutions", "Rest"],
    "IBS": ["Fiber supplements", "Antispasmodics", "Probiotics"],
    "Crohn's_disease": ["Anti-inflammatory drugs", "Immunosuppressants", "Biologics"],
    "measles": ["Fever reducers", "Vitamin A", "Rest"],
    "chickenpox": ["Antihistamines", "Antivirals", "Calamine lotion"],
    "allergic_reaction": ["Antihistamines", "Epinephrine (for severe reactions)"],
    "eczema": ["Moisturizers", "Corticosteroids", "Antihistamines"],
    "arthritis": ["Pain relievers", "Anti-inflammatory drugs", "Physical therapy"],
    "lupus": ["NSAIDs", "Corticosteroids", "Immunosuppressants"],
    "gout": ["NSAIDs", "Colchicine", "Corticosteroids"],
    "lyme_disease": ["Antibiotics", "Pain relievers"],
    "infection": ["Antibiotics", "Antivirals", "Antifungals"],
    "lymphoma": ["Chemotherapy", "Radiation therapy"],
    "HIV": ["Antiretrovirals", "Antibiotics (for opportunistic infections)"],
    "mononucleosis": ["Pain relievers", "Fluids", "Rest"],
    "cancer": ["Chemotherapy", "Radiation therapy", "Surgery"],
    "hyperthyroidism": ["Antithyroid medications", "Beta blockers", "Radioactive iodine"],
    "menopause": ["Hormone replacement therapy", "Calcium supplements", "Vitamin D"],
    "tuberculosis": ["Isoniazid", "Rifampin", "Pyrazinamide"]
};

const doctorTypes = {
    "flu": ["General Practitioner", "Family Medicine Doctor"],
    "malaria": ["Infectious Disease Specialist", "General Practitioner"],
    "dengue": ["Infectious Disease Specialist", "General Practitioner"],
    "typhoid": ["Infectious Disease Specialist", "General Practitioner"],
    "cold": ["General Practitioner", "Otolaryngologist"],
    "tuberculosis": ["Pulmonologist", "Infectious Disease Specialist"],
    "bronchitis": ["Pulmonologist", "General Practitioner"],
    "migraine": ["Neurologist", "General Practitioner"],
    "sinusitis": ["Otolaryngologist", "General Practitioner"],
    "food_poisoning": ["Gastroenterologist", "General Practitioner"],
    "pregnancy": ["Obstetrician", "Gynecologist"],
    "allergy": ["Allergist", "Immunologist"],
    "hay_fever": ["Allergist", "Immunologist"],
    "anemia": ["Hematologist", "General Practitioner"],
    "diabetes": ["Endocrinologist", "General Practitioner"],
    "thyroid_problems": ["Endocrinologist", "General Practitioner"],
    "heart_attack": ["Cardiologist", "Emergency Medicine Specialist"],
    "angina": ["Cardiologist", "General Practitioner"],
    "pneumonia": ["Pulmonologist", "General Practitioner"],
    "pulmonary_embolism": ["Pulmonologist", "Cardiologist"],
    "asthma": ["Pulmonologist", "Allergist"],
    "COPD": ["Pulmonologist", "General Practitioner"],
    "heart_failure": ["Cardiologist", "General Practitioner"],
    "appendicitis": ["Surgeon", "General Practitioner"],
    "gallstones": ["Gastroenterologist", "Surgeon"],
    "kidney_stones": ["Urologist", "Nephrologist"],
    "ulcers": ["Gastroenterologist", "General Practitioner"],
    "gastroenteritis": ["Gastroenterologist", "General Practitioner"],
    "IBS": ["Gastroenterologist", "Dietitian"],
    "Crohn's_disease": ["Gastroenterologist", "Dietitian"],
    "measles": ["Pediatrician", "General Practitioner"],
    "chickenpox": ["Pediatrician", "General Practitioner"],
    "allergic_reaction": ["Allergist", "Immunologist"],
    "eczema": ["Dermatologist", "Allergist"],
    "arthritis": ["Rheumatologist", "Orthopedic Surgeon"],
    "lupus": ["Rheumatologist", "Immunologist"],
    "gout": ["Rheumatologist", "Nephrologist"],
    "lyme_disease": ["Infectious Disease Specialist", "Rheumatologist"],
    "infection": ["Infectious Disease Specialist", "General Practitioner"],
    "lymphoma": ["Oncologist", "Hematologist"],
    "HIV": ["Infectious Disease Specialist", "General Practitioner"],
    "mononucleosis": ["General Practitioner", "Infectious Disease Specialist"],
    "cancer": ["Oncologist", "Radiation Oncologist"],
    "hyperthyroidism": ["Endocrinologist", "General Practitioner"],
    "menopause": ["Gynecologist", "Endocrinologist"],
    "tuberculosis": ["Pulmonologist", "Infectious Disease Specialist"]
};

let diagnosisHistory = [];

function diagnose() {
    const input = document.getElementById("symptomInput").value;
    const symptoms = input.split(',').map(s => s.trim().toLowerCase());
    const possibleDiseases = new Set();
    const medicine = new Set();
    const doctors = new Set();

    symptoms.forEach(symptom => {
        const diseases = knowledgeBase[symptom];
        if (diseases) {
            diseases.forEach(disease => {
                possibleDiseases.add(disease);
                if (medicineRecommendations[disease]) {
                    medicineRecommendations[disease].forEach(med => medicine.add(med));
                }
                if (doctorTypes[disease]) {
                    doctorTypes[disease].forEach(doc => doctors.add(doc));
                }
            });
        }
    });

    if (possibleDiseases.size === 0) {
        document.getElementById("result").innerHTML = "No diseases found.";
        return;
    }

    const diagnosisResult = {
        symptoms,
        diseases: [...possibleDiseases],
        medicines: [...medicine],
        doctors: [...doctors]
    };
    diagnosisHistory.push(diagnosisResult);

    let resultHTML = `<h2>Diagnosis Result</h2><p>Possible Diseases: ${[...possibleDiseases].join(', ')}</p>`;
    resultHTML += `<p>Recommended Medicines: ${[...medicine].join(', ')}</p>`;
    resultHTML += `<p>Recommended Doctors: ${[...doctors].join(', ')}</p>`;
    document.getElementById("result").innerHTML = resultHTML;
}

function viewHistory() {
    let historyHTML = "<h2>Diagnosis History</h2>";
    if (diagnosisHistory.length === 0) {
        historyHTML += "<p>No history available.</p>";
    } else {
        diagnosisHistory.forEach((entry, index) => {
            historyHTML += `<p><strong>Diagnosis ${index + 1}:</strong></p>`;
            historyHTML += `<p>Symptoms: ${entry.symptoms.join(', ')}</p>`;
            historyHTML += `<p>Diseases: ${entry.diseases.join(', ')}</p>`;
            historyHTML += `<p>Medicines: ${entry.medicines.join(', ')}</p>`;
            historyHTML += `<p>Doctors: ${entry.doctors.join(', ')}</p>`;
            historyHTML += "<hr>";
        });
    }
    document.getElementById("history").innerHTML = historyHTML;
    document.getElementById("history").style.display = "block";
}