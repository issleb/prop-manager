import Parser from "./parser.js";

describe("parseAirUrl", () => { 
    test("roomsUrl", () => {
        const url = "https://www.airbnb.com/rooms/22465553?adults=1&category_tag=Tag%3A5348&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-12-11&check_out=2022-12-16&federated_search_id=3012708b-56dc-4a96-932c-05cc3710ab3e&source_impression_id=p3_1667620273_J7Q5lQiv%2BvOJvcui";

        const room = Parser.parseAirUrl(url);

        expect(room.id).toEqual("22465553");
    });

    test("nonRoomsUrl", () => {
        const url = "https://www.airbnb.com/guest/inbox/1153467161?ttype=inbound_cx"
        const room = Parser.parseAirUrl(url);

        expect(room).toBeUndefined();
    });    
});

describe("parseVrboUrl", () => { 
    test("default url", () => {
        const url = "https://www.vrbo.com/9682530ha?adultsCount=1&arrival=2023-09-01&departure=2023-09-08";

        const room = Parser.parseVrboUrl(url);

        expect(room.id).toEqual("9682530ha");
    });

    // TODO: Add negative test.
});