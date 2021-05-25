import { collectData } from "../collectData";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({status:"OK"}),
    })
);

it("return input", async () => {
    const data = {status:"OK"}
    const newData = await collectData('http://localhost:8081/geonameUrl',data)
    expect(newData).toStrictEqual({status:"OK"})
});