from skill_extractor import extract_skills

# Load model once — stays in memory, fast for all calls after first
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def get_verdict(score):
    if score >= 80:
        return "Strong Match"
    elif score >= 70:
        return "Good Match"
    elif score >= 50:
        return "Partial Match"
    else:
        return "Weak Match"

def screen(resume_text, jd_text):
    resume_skills = extract_skills(resume_text)
    jd_skills     = extract_skills(jd_text)

    matched = [s for s in jd_skills if s in resume_skills]
    missing = [s for s in jd_skills if s not in resume_skills]
    partial = [s for s in resume_skills if s not in jd_skills]

    # Lightweight TF-IDF similarity instead of sentence-transformers
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform([resume_text, jd_text])
    similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]

    if len(jd_skills) > 0:
        skill_overlap = len(matched) / len(jd_skills)
    else:
        skill_overlap = 0

    final_score = round((similarity * 0.6 + skill_overlap * 0.4) * 100)

    return {
        "match_score"    : final_score,
        "verdict"        : get_verdict(final_score),
        "matched_skills" : matched,
        "missing_skills" : missing,
        "partial_skills" : partial,
        "should_apply"   : final_score >= 70
    }