export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { name, email, message } = req.body;
  console.log(name, email, message);
  res.status(200).json({ message: "Form submitted successfully!" });
}
