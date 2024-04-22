const nodemailer = require('nodemailer');
const fs = require('fs');

// Configura el transportador SMTP
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'davidar2200@gmail.com', // Tu dirección de correo electrónico
        pass: 'lxzi gtpp gjbk ayfs' // Tu contraseña o contraseña de aplicación
    }
});

// Lee el contenido del archivo HTML
fs.readFile('plantilla.html', 'utf8', (err, htmlData) => {
    if (err) {
        return console.log('Error al leer el archivo HTML:', err);
    }

    // Configura los detalles del correo electrónico con el contenido del archivo HTML
    let mailOptions = {
        from: 'davidar2200@gmail.com',
        to: 'contraloria@rexxai.com',
        subject: '¡Favor de confirmar o denegar el pago!',
        html: htmlData
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error al enviar el correo electrónico:', error);
        }
        console.log('Correo electrónico enviado con éxito:', info.response);
    });
});
