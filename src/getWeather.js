import fetch from 'node-fetch'

const apiKey = process.env.TOMORROW_API_KEY
const weatherUrl = `https://api.tomorrow.io/v4/timelines?location=42.3478, -71.0466&fields=temperature,precipitationProbability,precipitationType&timesteps=1h&units=imperial&apikey=${apiKey}&endTime=nowPlus5d&startTime=now`

export async function getWeather() {
  if(!apiKey)  {
    throw new Error('Missing TOMORROW_API_KEY')
  }

  const response = await fetch(weatherUrl)
  const data = await response.json()

  return data
}
