import axios from "axios";

const KEY = "AIzaSyCb94ENaPJyyv3D3u4m3joqVBiRTUA4SRw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
