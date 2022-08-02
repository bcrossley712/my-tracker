import { AppState } from "../AppState";
import { Trip } from "../models/Trip";
import { logger } from "../utils/Logger";

class TripsService {
  addTrip(data) {
    const trip = new Trip(data)
    AppState.trips = [...AppState.trips, trip]
    this.saveLocal()
  }
  checkTrip(id) {
    const trip = AppState.trips.find(t => t.id == id)
    trip.complete = !trip.complete
    this.saveLocal()
  }
  deleteTrip(id) {
    const index = AppState.trips.findIndex(t => t.id == id)
    AppState.trips.splice(index, 1)
    this.saveLocal()
  }
  saveLocal() {
    // Save the current Appstate into local storage
    localStorage.setItem('my-tracker', JSON.stringify({
      trips: AppState.trips
    }))
  }
  loadLocal() {
    // get data from local storage by same name saved
    let data = JSON.parse(localStorage.getItem('my-tracker'))
    console.log('loaded data', data)
    // check for if data exists, cause we only want to try this if it does, will error otherwise
    if (data != null) {
      AppState.trips = data.trips.map(t => new Trip(t))
    }
  }
}
export const tripsService = new TripsService()