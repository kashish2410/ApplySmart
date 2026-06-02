const BASE_URL = "https://applysmartmart-backend.onrender.com";

export async function screenResume(resume, jobDescription) {
  const response = await fetch(`${BASE_URL}/screen`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resume: resume,
      job_description: jobDescription,
    }),
  });

  const data = await response.json();
  return data;
}