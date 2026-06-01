from sentence_transformers import SentenceTransformer, util
from skill_extractor import extract_skills

# Load model once — stays in memory, fast for all calls after first
model = SentenceTransformer('all-MiniLM-L6-v2')

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
    # Step 1 — extract skills from both texts
    resume_skills = extract_skills(resume_text)
    jd_skills     = extract_skills(jd_text)

    # Step 2 — find matched and missing skills
    matched  = [s for s in jd_skills if s in resume_skills]
    missing  = [s for s in jd_skills if s not in resume_skills]
    partial  = [s for s in resume_skills if s not in jd_skills]

    # Step 3 — compute semantic similarity score
    r_vec = model.encode(resume_text)
    j_vec = model.encode(jd_text)
    similarity = util.cos_sim(r_vec, j_vec).item()

    # Step 4 — calculate final score
    # 60% weight on semantic similarity, 40% on skill overlap
    if len(jd_skills) > 0:
        skill_overlap = len(matched) / len(jd_skills)
    else:
        skill_overlap = 0

    final_score = round((similarity * 0.6 + skill_overlap * 0.4) * 100)

    # Step 5 — build and return result
    return {
        "match_score"    : final_score,
        "verdict"        : get_verdict(final_score),
        "matched_skills" : matched,
        "missing_skills" : missing,
        "partial_skills" : partial,
        "should_apply"   : final_score >= 70
    }