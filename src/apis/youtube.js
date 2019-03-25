import axios from 'axios';

const KEY = 'AIzaSyC0dTFzQQZ6IdzUYBE2gCjBzntdsOLdVTg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})