export const api = "https://strainseekr.prestoapi.com/api";

export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJiZDYyZGE4ZC01MzU4LTRmMDEtYTA0ZC1jMGJjNDM3NzQ5NDUiLCJwcm9qZWN0SUQiOiIzNDYxIiwibmFtZSI6IlNoYXduIFBhdHJpY2sgQmxhbmQiLCJlbWFpbCI6IlNoYXducGF0cmljay5ibGFuZEBnbWFpbC5jb20iLCJwcm92aWRlciI6IkVtYWlsL1Bhc3N3b3JkIiwiY3JlYXRlZCI6IjcvMjYvMjAyMiA4OjU0OjQzIFBNIiwibGFzdExvZ2luIjoiOC80LzIwMjIgMTo0MTozMiBBTSIsInJvbGUiOiJXcml0ZSIsIm1ldGFkYXRhIjoie1wiXCI6XCJcIn0iLCJleHAiOjE2NTk1ODc2MzIsImlzcyI6IlByZXN0b0FQSSIsImF1ZCI6InN0cmFpbnNlZWtyIn0.nAj49mI2jBYdHNoRJrjVqd5GNTFIr1EU5dDEIZt-_2g",
  },
};

export const surveyImportance = [
  { question: "How it Makes Me Feel", value: "WeightingProperty" },
  { question: "How it Tastes", value: "WeightingTaste" },
  { question: "How it Smells", value: "WeightingSmell" },
];
