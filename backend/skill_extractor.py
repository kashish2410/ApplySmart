import spacy

nlp = spacy.load("en_core_web_sm")

# Common tech skills to look for
SKILL_KEYWORDS = [
    "python", "java", "javascript", "typescript", "c++", "c#", "go", "rust",
    "react", "node.js", "django", "flask", "fastapi", "spring",
    "sql", "mysql", "postgresql", "mongodb", "redis",
    "machine learning", "deep learning", "nlp", "computer vision",
    "tensorflow", "pytorch", "scikit-learn", "pandas", "numpy",
    "docker", "kubernetes", "aws", "azure", "gcp",
    "git", "linux", "rest api", "graphql",
    "html", "css", "excel", "power bi", "tableau",
    "communication", "teamwork", "problem solving", "leadership","java", "javascript", "typescript", "c++", "c#", "go", "rust",
]

def extract_skills(text):
    text_lower = text.lower()
    found = []

    for skill in SKILL_KEYWORDS:
        if skill in text_lower:
            found.append(skill)

    return list(set(found))