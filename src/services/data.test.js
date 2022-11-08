import Data from "./data.js";

describe("getRoom", () => { 
    test("getDefaultRoom", () => {
        const id = "35782";
        const room = Data.getRoom(id);

        expect(room.id).toEqual(id);
        expect(room.name).toEqual("Silver Lake hot tub");
    });  
});

describe("getRoomByAir", () => { 
    test("getDefaultRoom", () => {
        const airId = "610721631326249541";
        const room = Data.getRoomByAir(airId);

        expect(room.id).toEqual("35782");
        expect(room.name).toEqual("Silver Lake hot tub");
    });  
});

describe("getRoomByVrbo", () => { 
    test("getDefaultRoom", () => {
        const airId = "9682530ha";
        const room = Data.getRoomByVrbo(airId);

        expect(room.id).toEqual("35782");
        expect(room.name).toEqual("Silver Lake hot tub");
    });  
});