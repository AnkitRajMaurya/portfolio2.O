export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  const { name, email, message } = req.body;
  console.log("Contact:", name, email, message);
  res.status(200).json({ message: "Form submitted successfully" });
}
