export class IncidentCreateDto {
    date;
    description;
    userID;
    hotspotID;

    constructor(date, description, userID, hotspotID) {
        this.date = date;
        this.description = description;
        this.userID = userID;
        this.hotspotID = hotspotID;
    }
}
