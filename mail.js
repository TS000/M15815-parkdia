const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main( 
    status, agent, agentName, arrivalDate, arrivalTime, bookingDate, 
    duration, exitDate, exitTime, bookingRef, bookingTime, bookingValue, 
    carParkCode, carParkDesc, email, foreName, initial, title, productCode, 
    productDesc, promoCode, newsletter, specialOffers, upgrDesc, 
    upgrOrigCar, upgrOrigPrice, upgrOrigPromo, surname 
    ) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // const testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: testAccount.user, // generated ethereal user
    //         pass: testAccount.pass, // generated ethereal password
    //     },
    // });

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bridgeparkdia@gmail.com',
            pass: 'F0rumre1'
           }
       });

    //    crm+M15815.cs.6@bcc.mymarketing360.com

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"ParkDIA Server" <reservations@parkdia.com>', // sender address
        to: 'tyler.snell@madwire.com', // list of receivers
        subject: 'M15815', // Subject line
        text: `Status: ${status} \r\n\r\n  Agent: ${agent} \r\n\r\n Agent Name: ${agentName} \r\n\r\n Arrival Date: ${arrivalDate} \r\n\r\n Arrival Time: ${arrivalTime} \r\n\r\n Booking Date: ${bookingDate} \r\n\r\n Booking Reference: ${bookingRef} \r\n\r\n Booking Time: ${bookingTime} \r\n\r\n Booking Value: ${bookingValue} \r\n\r\n Duration: ${duration} \r\n\r\n Exit Date: ${exitDate} \r\n\r\n Exit Time: ${exitTime} \r\n\r\n Booking Reference: ${bookingRef} \r\n\r\n Car Park Code: ${carParkCode} \r\n\r\n Car Park Description: ${carParkDesc} \r\n\r\n Email: ${email} \r\n\r\n Fore Name: ${foreName} \r\n\r\n Initials: ${initial} \r\n\r\n Title: ${title} \r\n\r\n Product Code: ${productCode} \r\n\r\n Product Description: ${productDesc} \r\n\r\n Promo Code: ${promoCode} \r\n\r\n Newsletter: ${newsletter} \r\n\r\n Special Offers: ${specialOffers} \r\n\r\n Upgrade Description: ${upgrDesc} \r\n\r\n Upgrade Original Car: ${upgrOrigCar} \r\n\r\n Upgrade Original Price: ${upgrOrigPrice} \r\n\r\n Upgrade Original Promo: ${upgrOrigPromo} \r\n\r\n Surname: ${surname}` , // plain text body
        html: `Status: ${status} </br> Agent: ${agent} </br> Agent Name: ${agentName} </br> Arrival Date: ${arrivalDate} </br> Arrival Time: ${arrivalTime} </br> Booking Date: ${bookingDate} </br> Booking Reference: ${bookingRef} </br> Booking Time: ${bookingTime} </br Booking Value: ${bookingValue} </br> Duration: ${duration} </br> Exit Date: ${exitDate}</br> Exit Time: ${exitTime} </br> Booking Reference: ${bookingRef} </br> Car Park Code: ${carParkCode} </br> Car Park Description: ${carParkDesc} </br> Email: ${email} </br> Fore Name: ${foreName} </br> Initials: ${initial} </br> Title: ${title} </br> Product Code: ${productCode} </br> Product Description: ${productDesc} </br> Promo Code: ${promoCode} </br> Newsletter: ${newsletter} </br> Special Offers: ${specialOffers} </br> Upgrade Description: ${upgrDesc} </br> Upgrade Original Car: ${upgrOrigCar} </br> Upgrade Original Price: ${upgrOrigPrice} </br> Upgrade Original Promo: ${upgrOrigPromo} </br> Surname: ${surname}` , // html body
    });

    // console.log('Message sent: %s', info.messageId);
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    transporter.sendMail(info, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}

module.exports.main = main;