import axios from 'axios'

const getEvents = (eventType, callback) => {
  axios.get(`${EVENT_HUB_API_URL}/events/${eventType}`).then((response) => {
    callback(response.data)
  })
}

const deleteEvents = (eventType, callback) => {
  axios.delete(`${EVENT_HUB_API_URL}/events/${eventType}`).then((response) => {
    callback(response.status)
  })
}

export const getFunds = (callback) => {
  /*
   * We are still persisting this myth that we can map straight from 'fundPublished' event to actual fund
   * whereas in reality, any one fund could have several 'fundPublished' events and we'd only be interested in the
   * most recent of those. However, for prototype purposes, the current approach will suffice for now.
   */
  getEvents('fundPublished', (data) => {
    const funds = data.events.map((event) => {
      const eventData = JSON.parse(event.data)
      return eventData.value
    })

    callback(funds)
  })
}

export const clearFunds = (callback) => {
  deleteEvents('fundPublished', (status) => {
    callback(status === 204)
  })
}
