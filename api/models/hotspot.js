export class Hotspot {
    hotspotID;
    description;
    areaID;
    hotspotTypeID;

    constructor(areaId, province, suburb, hotspotTypeID) {
        this.hotspotID = areaId;
        this.description = province;
        this.areaID = suburb;
        this.hotspotTypeID = hotspotTypeID;
    }
}