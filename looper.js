const json = require('./test.json');

function filterLoop(data) {
    for (let i = 0; i < data.length; i++) {
        const status = data[i].field1;
        const agent = data[i].field2;
        const agentName = data[i].field3;
        const arrivalDate = data[i].field4;
        const arrivalTime = data[i].field5;
        const bookingDate = data[i].field6;
        const duration = data[i].field7;
        const exitDate = data[i].field8;
        const exitTime = data[i].field9;
        const bookingRef = data[i].field10;
        const bookingTime = data[i].field11;
        const bookingValue = data[i].field12;
        const carParkCode = data[i].field13;
        const carParkDesc = data[i].field14;
        const email = data[i].field15;
        const foreName = data[i].field16;
        const inital = data[i].field17;
        const title = data[i].field18;
        const productCode = data[i].field19;
        const productDesc = data[i].field20;
        const promoCode = data[i].field21;
        const newsletter = data[i].field22;
        const specialOffers = data[i].field23;
        const upgrDesc = data[i].field24;
        const upgrOrigCar = data[i].field25;
        const upgrOrigPrice = data[i].field26;
        const upgrOrigPromo = data[i].field27;
        const surname = data[i].field28;
        console.log(email);
        console.log(surname);
    }
}

filterLoop(json);
