# ApplySmart — Job Fit Screener

A full stack AI web app that helps job seekers check how well their resume matches a job description **before applying** — saving time and improving application quality.

##  Live Demo
[https://apply-smart-xi.vercel.app](https://apply-smart-xi.vercel.app)

##  The Problem
Job seekers apply to hundreds of jobs daily on platforms like LinkedIn, Internshala, and Unstop without knowing if their skills actually match what the employer is looking for. This leads to wasted time and low response rates.

##  The Solution
ApplySmart acts as a personal screener. Paste your resume and a job description — it instantly tells you:
- Your match score out of 100
- Which skills you already have
- Which skills you're missing
- Whether you should apply (70%+ threshold)

##  Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Backend | Python, FastAPI |
| NLP | spaCy, TF-IDF, Cosine Similarity |
| Deployment | Vercel (frontend), Render (backend) |

##  How It Works
1. User pastes resume text and job description
2. spaCy extracts skill keywords from both texts
3. TF-IDF vectorizer converts both texts into numerical vectors
4. Cosine similarity measures how close the two vectors are
5. Final score combines semantic similarity (60%) and skill overlap (40%)
6. Result shows matched skills, missing skills, and a go/no-go verdict

##  Run Locally

**Backend**
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend**
```bash
cd frontend
npm install
npm start
```

##  Author
**Kashish** — [github.com/kashish2410](https://github.com/kashish2410)