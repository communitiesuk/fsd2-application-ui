import axios from 'axios'

export const getEvents = (eventType, callback) => {
  axios.get(`${EVENT_HUB_API_URL}/events/${eventType}`).then((response) => {
    callback(response.data)
  })
}
