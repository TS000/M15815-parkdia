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
                        let nuArrayReg = [];
                        let nuArrayRes = [];

                        csv({
                                trim: true,
                                noheader: true,
                            })
                            .fromFile(csvFilePath)
                            .then((jsonObj) => {
                                

                                const data = jsonObj;
                                    console.log(`it's reg: ${files[i]}`)
                                    for (let i = 0; i < jsonObj.length; i++) {
                                         let j = {};
                                        j['status'] = data[i].field1;
                                        j['agent'] = data[i].field2;
                                        j['agentName'] = data[i].field3;
                                        j['arrivalDate'] = data[i].field4;
                                        j['arrivalTime'] = data[i].field5;
                                        j['bookingDate'] = data[i].field6;
                                        j['duration'] = data[i].field7;
                                        j['exitDate'] = data[i].field8;
                                        j['exitTime'] = data[i].field9;
                                        j['bookingRef'] = data[i].field10;
                                        j['bookingTime'] = data[i].field11;
                                        j['bookingValue'] = data[i].field12;
                                        j['carParkCode'] = data[i].field13;
                                        j['carParkDesc'] = data[i].field14;
                                        j['email'] = data[i].field15;
                                        j['foreName'] = data[i].field16;
                                        j['initial'] = data[i].field17;
                                        j['title'] = data[i].field18;
                                        j['productCode'] = data[i].field19;
                                        j['productDesc'] = data[i].field20;
                                        j['promoCode'] = data[i].field21;
                                        j['newsletter'] = data[i].field22;
                                        j['specialOffers'] = data[i].field23;
                                        j['upgrDesc'] = data[i].field24;
                                        j['upgrOrigCar'] = data[i].field25;
                                        j['upgrOrigPrice'] = data[i].field26;
                                        j['upgrOrigPromo'] = data[i].field27;
                                        j['surname'] = data[i].field28;
                                        nuArrayReg.push(j);
                                    }
                                // } else {
                                    // console.log(`it's res ${files[i]}`)
                                    // for (let i = 0; i < jsonObj.length; i++) {
                                    //     let j = {};
                                    //     j['transType'] = data[i].field1;
                                    //     j['address1'] = data[i].field2;
                                    //     j['address2'] = data[i].field3;
                                    //     j['address3'] = data[i].field4;
                                    //     j['countryState'] = data[i].field5;
                                    //     j['email'] = data[i].field6;
                                    //     j['firstBookDate'] = data[i].field7;
                                    //     j['lastBookDate'] = data[i].field8;
                                    //     j['newsletter'] = data[i].field9;
                                    //     j['postCode'] = data[i].field10;
                                    //     j['surname'] = data[i].field11;
                                    //     j['title'] = data[i].field12;
                                    //     j['town'] = data[i].field13;
                                    //     j['userID'] = data[i].field14;
                                    //     j['category'] = data[i].field15;
                                    //     nuArrayRes.push(j);
                                    // }
                                
                                
                            }).then(() => {
                                let jsonFile = JSON.stringify(nuArrayReg)
                                fs.writeFile("/home/pretzel/Desktop/apiTests/var/sftp/uploads/regData.json", jsonFile, function(err) {
                                    if(err) {
                                        return console.log(err);
                                    }
                                
                                    console.log("The file was saved REG!");
                                }); 

                                // let jsonFile = JSON.stringify(nuArrayRes)
                                // fs.writeFile("/home/pretzel/Desktop/apiTests/var/sftp/uploads/resData.json", jsonFile, function(err) {
                                //     if(err) {
                                //         return console.log(err);
                                //     }
                                
                                //     console.log("The file was saved RES!");
                                // }); 
                                // let oldPath = `/home/pretzel/Desktop/apiTests/var/sftp/uploads/${files[i]}`
                                // let newPath = `/home/pretzel/Desktop/apiTests/var/sftp/backups/${files[i]}`

                                // fs.rename(oldPath, newPath, function (err) {
                                //     if (err) throw err
                                //     console.log('Successfully moved.')
                                // })
                            });
                    };
                };


            glob('*.csv', options, forFiles);

        } else {
            console.log('no files');
        }
    }
});