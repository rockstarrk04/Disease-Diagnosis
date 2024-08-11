import tkinter as tk
from tkinter import messagebox


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


def infer_disease(symptoms):
    possible_diseases = []
    for symptom in symptoms:
        if symptom in knowledge_base:
            possible_diseases.extend(knowledge_base[symptom])
    return set(possible_diseases)


def diagnose():
    user_input = symptom_entry.get()
    symptoms = [symptom.strip() for symptom in user_input.split(",")]
    possible_diseases = infer_disease(symptoms)

    if possible_diseases:
        result = "Based on your symptoms, you might have the following diseases:\n" + "\n".join(possible_diseases)
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