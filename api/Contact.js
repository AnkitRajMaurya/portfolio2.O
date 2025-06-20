export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;

  console.log("Contact form data:", name, email, message);

  // You can add: save to database, send to Google Sheets, or email

  res.status(200).json({ message: "Form submitted successfully" });
}
