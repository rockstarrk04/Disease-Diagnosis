const knowledgeBase = {
    "fever": ["flu", "malaria", "dengue", "typhoid"],
    "cough": ["flu", "cold", "tuberculosis", "bronchitis"],
    "headache": ["flu", "malaria", "cold", "migraine", "sinusitis"],
    "nausea": ["malaria", "food_poisoning", "pregnancy"],
    "sneezing": ["cold", "allergy", "hay_fever"],
    "fatigue": ["flu", "anemia", "diabetes", "thyroid_problems"],
    "chest_pain": ["heart_attack", "angina", "pneumonia", "pulmonary_embolism"],
    "shortness_of_breath": ["asthma", "COPD", "heart_failure", "pulmonary_embolism"],
    "abdominal_pain": ["appendicitis", "gallstones", "kidney_stones", "ulcers"],
    "diarrhea": ["food_poisoning", "gastroenteritis", "IBS", "Crohn's_disease"],
    "rash": ["measles", "chickenpox", "allergic_reaction", "eczema"],
    "joint_pain": ["arthritis", "lupus", "gout", "lyme_disease"],
    "swollen_lymph_nodes": ["infection", "lymphoma", "HIV", "mononucleosis"],
    "weight_loss": ["cancer", "diabetes", "hyperthyroidism", "HIV"],
    "night_sweats": ["tuberculosis", "lymphoma", "menopause", "hyperthyroidism"]
};

const medicineRecommendations = {
    "flu": ["Paracetamol", "Rest", "Fluids"],
    "malaria": ["Chloroquine", "ACTs"],
    "dengue": ["Acetaminophen", "Hydration", "Rest"],
    "typhoid": ["Antibiotics", "Fluids", "Rest"],
    "cold": ["Antihistamines", "Decongestants", "Rest"],
    "tuberculosis": ["Isoniazid", "Rifampin", "Pyrazinamide"],
    "bronchitis": ["Cough syrup", "Bronchodilators", "Rest"],
    "migraine": ["Pain relievers", "Triptans", "Anti-nausea meds"],
    "sinusitis": ["Nasal corticosteroids", "Decongestants", "Pain relievers"],
    "food_poisoning": ["ORS", "Antibiotics (if bacterial)"],
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
    "ulcers": ["PPIs", "Antacids", "Antibiotics (H. pylori)"],
    "gastroenteritis": ["ORS", "Rest"],
    "IBS": ["Fiber supplements", "Antispasmodics", "Probiotics"],
    "Crohn's_disease": ["Anti-inflammatories", "Immunosuppressants", "Biologics"],
    "measles": ["Fever reducers", "Vitamin A", "Rest"],
    "chickenpox": ["Antihistamines", "Antivirals", "Calamine lotion"],
    "allergic_reaction": ["Antihistamines", "Epinephrine (if severe)"],
    "eczema": ["Moisturizers", "Corticosteroids", "Antihistamines"],
    "arthritis": ["Pain relievers", "Anti-inflammatories", "Physical therapy"],
    "lupus": ["NSAIDs", "Corticosteroids", "Immunosuppressants"],
    "gout": ["NSAIDs", "Colchicine", "Corticosteroids"],
    "lyme_disease": ["Antibiotics", "Pain relievers"],
    "infection": ["Antibiotics", "Antivirals", "Antifungals"],
    "lymphoma": ["Chemotherapy", "Radiation therapy"],
    "HIV": ["Antiretrovirals", "Antibiotics (for opportunistic infections)"],
    "mononucleosis": ["Pain relievers", "Fluids", "Rest"],
    "cancer": ["Chemotherapy", "Radiation therapy", "Surgery"],
    "hyperthyroidism": ["Antithyroid meds", "Beta blockers", "Radioactive iodine"],
    "menopause": ["Hormone replacement therapy", "Calcium", "Vitamin D"],
    "tuberculosis": ["Isoniazid", "Rifampin", "Pyrazinamide"]
};

function inferDisease(symptoms) {
    const possibleDiseases = new Set();
    symptoms.forEach(symptom => {
        if (knowledgeBase[symptom]) {
            knowledgeBase[symptom].forEach(disease => possibleDiseases.add(disease));
        }
    });
    return Array.from(possibleDiseases);
}

function recommendMedicines(diseases) {
    const medicines = new Set();
    diseases.forEach(disease => {
        if (medicineRecommendations[disease]) {
            medicineRecommendations[disease].forEach(medicine => medicines.add(medicine));
        }
    });
    return Array.from(medicines);
}

function diagnose() {
    const userInput = document.getElementById('symptomInput').value;
    const symptoms = userInput.split(',').map(symptom => symptom.trim());
    const possibleDiseases = inferDisease(symptoms);
    const medicines = recommendMedicines(possibleDiseases);

    const resultDiv = document.getElementById('result');
    if (possibleDiseases.length > 0) {
        const diseasesList = possibleDiseases.join(', ');
        const medicinesList = medicines.join(', ');
        resultDiv.innerHTML = `<p><strong>Possible diseases:</strong> ${diseasesList}</p><p><strong>Recommended medicines:</strong> ${medicinesList}</p>`;
    } else {
        resultDiv.innerHTML = "<p>No matching diseases found based on the symptoms provided.</p>";
    }
}