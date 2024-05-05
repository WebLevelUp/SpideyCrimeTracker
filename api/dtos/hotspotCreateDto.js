export class HotspotCreateDto {
    description;
    areaID;
    hotspotTypeID;

    constructor(areaId, province, suburb, hotspotTypeID) {
        this.description = province;
        this.areaID = suburb;
        this.hotspotTypeID = hotspotTypeID;
    }
}