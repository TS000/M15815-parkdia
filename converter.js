const csv = require('csvtojson/v2');
const fs = require('fs');
const mail = require('./mail.js');
const mail2 = require('./mail2.js');
fs.readdir('/home/pretzel/Desktop/apiTests/var/sftp/uploads/', function (err, files) {
    if (err) {
        console.log(err);
    } else {
        if (files.length) {
            console.log('there are files');
            const glob = require('glob'),
                options = {

                    cwd: '/home/pretzel/Desktop/apiTests/var/sftp/uploads/',

                },

                forFiles = function (err, files) {
                    for (let i = 0; i < files.length; i++) {
                        const csvFilePath = `/home/pretzel/Desktop/apiTests/var/sftp/uploads/${files[i]}`;
                        const substring = 'RES';

                        csv({
                                trim: true,
                                noheader: true,
                            })
                            .fromFile(csvFilePath)
                            .then((jsonObj) => {

                                const data = jsonObj;
                                console.log(data)
                                if (files[i].includes(substring)) {
                                    console.log(`it's reg: ${files[i]}`)
                                    for (let i = 0; i < jsonObj.length; i++) {
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
                                        const initial = data[i].field17;
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
                                        // console.log(email);
                                        // console.log(surname);
                                        mail.main(status, agent, agentName, arrivalDate, arrivalTime, bookingDate, duration, exitDate, exitTime, bookingRef, bookingTime, bookingValue, carParkCode, carParkDesc, email, foreName, initial, title, productCode, productDesc, promoCode, newsletter, specialOffers, upgrDesc, upgrOrigCar, upgrOrigPrice, upgrOrigPromo, surname).catch(console.error);
                                    }
                                } else {
                                    console.log(`it's res ${files[i]}`)
                                    for (let i = 0; i < jsonObj.length; i++) {
                                        const transType = data[i].field1;
                                        const address1 = data[i].field2;
                                        const address2 = data[i].field3;
                                        const address3 = data[i].field4;
                                        const countryState = data[i].field5;
                                        const email = data[i].field6;
                                        const firstBookDate = data[i].field7;
                                        const lastBookDate = data[i].field8;
                                        const newsletter = data[i].field9;
                                        const postCode = data[i].field10;
                                        const surname = data[i].field11;
                                        const title = data[i].field12;
                                        const town = data[i].field13;
                                        const userID = data[i].field14;
                                        const category = data[i].field15;
                                        // console.log(email);
                                        // console.log(surname);
                                        mail2.main(transType, address1, address2, address3, countryState, email, firstBookDate, lastBookDate, newsletter, postCode, surname, title, town, userID, category).catch(console.error);
                                    }
                                }
                            }).then(() => {
                                let oldPath = `/home/pretzel/Desktop/apiTests/var/sftp/uploads/${files[i]}`
                                let newPath = `/home/pretzel/Desktop/apiTests/var/sftp/backups/${files[i]}`

                                fs.rename(oldPath, newPath, function (err) {
                                    if (err) throw err
                                    console.log('Successfully moved.')
                                })
                            });
                    };
                };


            glob('*.csv', options, forFiles);

        } else {
            console.log('no files');
        }
    }
});