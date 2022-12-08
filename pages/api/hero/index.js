import { data } from "../../../data/heroData"

export default function handler (req, res) {
  return res.status(200).json({ data })
}
