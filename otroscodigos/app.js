const nodemailer = require('nodemailer');

// Configura el transportador SMTP
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'davidar2200@gmail.com', // Tu dirección de correo electrónico
        pass: 'lxzi gtpp gjbk ayfs' // Tu contraseña
    }
});

// Configura los detalles del correo electrónico
let mailOptions = {
    from: 'davidar2200@gmail.com',
    to: 'dvicamp@gmail.com',
    subject: '¡Hola desde JavaScript!',
    text: 'Este es un correo electrónico enviado desde Node.js.'
};

// Envía el correo electrónico
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error al enviar el correo electrónico:', error);
    }
    console.log('Correo electrónico enviado con éxito:', info.response);
});
