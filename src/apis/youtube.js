import axios from "axios";

const KEY = "AIzaSyDe2LCyoj41D8pIdMlT8soHxpVCqitH9wM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
