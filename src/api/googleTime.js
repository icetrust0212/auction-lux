import axios  from './axios';
const url = "https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331766000&language=es&key=YOUR_API_KEY";
const key = "VQS6AM2Y";
export const getWhat3words = async (coordinates) => {
  console.log('google timezone start time: ', );
  return await axios.get(url,  {
    params: {
      key,
      coordinates
    }
  }).then(res => {
    return res.data.words;
  });
}