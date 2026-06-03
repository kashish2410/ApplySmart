from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from screener import screen

app = FastAPI()

# This allows your React frontend to call this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://apply-smart-xi.vercel.app"
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

# This defines the shape of data your API expects
class ScreenRequest(BaseModel):
    resume: str
    job_description: str

@app.post("/screen")
def screen_resume(request: ScreenRequest):
    result = screen(request.resume, request.job_description)
    return result