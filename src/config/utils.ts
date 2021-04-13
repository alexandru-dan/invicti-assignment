import 'reflect-metadata';
import * as fs from 'fs';

export function readFromFile( fileName: string, type : string ,key : string) {
    const data = fs.readFileSync("./src/locators/" + fileName + ".json");
    const json = JSON.parse(data.toString());
    return json[type][key];
}

export function readTestData(key : string){
    const data = fs.readFileSync("./src/test_data/TEST_DATA.json");
    const json = JSON.parse(data.toString());
    const key_ = key.split("TD@")[1];
    return json[key_];
}
