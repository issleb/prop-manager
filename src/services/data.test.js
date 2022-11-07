import Data from "./data.js";

describe("getRoom", () => { 
    test("getDefaultRoom", () => {
        const id = "22465553";
        const room = Data.getRoom(id);

        expect(room.id).toEqual("22465553");
        expect(room.name).toEqual("Kenosha cabin");
    });  
});