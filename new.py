import tkinter as tk
from tkinter import messagebox

# Extended knowledge base with associated medicines
knowledge_base = {
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
}

# Associated medicines for each disease
medicine_recommendations = {
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
}

def infer_disease(symptoms):
    possible_diseases = []
    for symptom in symptoms:
        if symptom in knowledge_base:
            possible_diseases.extend(knowledge_base[symptom])
    return set(possible_diseases)

def recommend_medicines(diseases):
    medicines = set()
    for disease in diseases:
        if disease in medicine_recommendations:
            medicines.update(medicine_recommendations[disease])
    return medicines

def diagnose():
    user_input = symptom_entry.get()
    symptoms = [symptom.strip() for symptom in user_input.split(",")]
    possible_diseases = infer_disease(symptoms)
    
    if possible_diseases:
        medicines = recommend_medicines(possible_diseases)
        result = (
            "Based on your symptoms, you might have the following diseases:\n" + 
            "\n".join(possible_diseases) +
            "\n\nRecommended Medicines:\n" + 
            ", ".join(medicines)
        )
    else:
        result = "No matching diseases found based on the symptoms provided."

    messagebox.showinfo("Diagnosis Result", result)

root = tk.Tk()
root.title("Expert System for Disease Diagnosis")

label = tk.Label(root, text="Please enter your symptoms, separated by commas (e.g., fever, cough):")
label.pack(pady=10)

symptom_entry = tk.Entry(root, width=50)
symptom_entry.pack(pady=10)

button = tk.Button(root, text="Diagnose", command=diagnose)
button.pack(pady=10)

root.mainloop()
