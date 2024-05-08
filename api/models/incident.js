export class Incident {
    incidentID;
    date;
    description;
    userID;
    hotspotID;

    constructor(incidentID, date, description, userID, hotspotID) {
        this.incidentID = incidentID;
        this.date = date;
        this.description = description;
        this.userID = userID;
        this.hotspotID = hotspotID;
    }
}