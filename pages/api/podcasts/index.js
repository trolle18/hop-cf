import { data } from "../../../data/podcastData"

export default function handler (req, res) {
  return res.status(200).json({ data })
}
