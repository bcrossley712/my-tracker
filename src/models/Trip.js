import { generateId } from "../utils/generateId";
export class Trip {
  constructor(data) {
    this.id = data.id || generateId()
    this.dateTime = data.dateTime
    this.complete = data.complete || false
    this.halfTrip = data.halfTrip || false
  }

}