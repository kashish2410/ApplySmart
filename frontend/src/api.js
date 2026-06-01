const BASE_URL = "http://127.0.0.1:8000";

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