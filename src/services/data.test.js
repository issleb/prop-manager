import Data from "./data.js";

describe("getRoom", () => { 
    test("getDefaultRoom", () => {
        const id = "35782";
        const room = Data.getRoom(id);

        expect(room.id).toEqual(id);
        expect(room.name).toEqual("Silver Lake hot tub");
    });  
});