import fs from 'fs';
import path from 'path';

export class Data {

    static usersDataPath = path.resolve(__dirname, '../tests/test-data/users.json');
    static regionDataPath = path.resolve(__dirname, '../test-data/region.json');
    static tapsDataPath = path.resolve(__dirname, '../test-data/taps.json');
    static itemsDataPath = path.resolve(__dirname, '../test-data/items.json');

    static parse(filePath: string) {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    // get keyword 'get' to define a getter method 
    static get getLoginData() {
        return this.parse(this.usersDataPath);
    }

    static get getItemsData() {
        return this.parse(this.itemsDataPath);
    }

    static get getRegionData() {
        return this.parse(this.regionDataPath);
    }

    static get getTapData() {
        return this.parse(this.tapsDataPath);
    }
}