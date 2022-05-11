import contacts from "./contacts.json";

export default function handler(req, res) {
  res.status(200).json({ data: contacts });
}
