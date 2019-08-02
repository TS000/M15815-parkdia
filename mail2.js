const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main( 
  transType, address1, address2, address3, countryState, email, firstBookDate, lastBookDate, newsletter, postCode, surname, title, town, userID, category 
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


   
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"ParkDIA Server" <reservations@parkdia.com>', // sender address
        to: 'crm+M15815.cs.6@bcc.mymarketing360.com', // list of receivers
        subject: 'M15815', // Subject line
        text: `Transaction Type: ${transType} \r\n\r\n  Address 1: ${address1} \r\n\r\n Address 2: ${address2} \r\n\r\n Address 3: ${address3} \r\n\r\n Country/State: ${countryState} \r\n\r\n Email: ${email} \r\n\r\n First Booking Date: ${firstBookDate} \r\n\r\n Last Booking Date: ${lastBookDate} \r\n\r\n Newsletter Opt In: ${newsletter} \r\n\r\n Postcode: ${[postCode]} \r\n\r\n Surname: ${surname} \r\n\r\n Title: ${title} \r\n\r\n Town: ${town} \r\n\r\n User ID: ${userID} \r\n\r\n Category: ${category}` , // plain text body
        html: `Transaction Type: ${transType} </br> Address 1: ${address1} </br> Address 2: ${address2} </br> Address 3: ${address3} </br> Country/State: ${countryState} </br> Email: ${email} </br> First Booking Date: ${firstBookDate} </br> Last Booking Date: ${lastBookDate} </br Newsletter Opt In: ${newsletter} </br> Postcode: ${[postCode]} </br> Surname: ${surname} </br> Title: ${title} </br> Town: ${town} </br> User ID: ${userID} </br> Category: ${category}`, // html body
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