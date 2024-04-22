import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configura los detalles del servidor SMTP
smtp_server = 'smtp.gmail.com'  # Cambia esto por el servidor SMTP que estés utilizando
port = 587  # El puerto puede variar según el servidor SMTP

# Tu dirección de correo electrónico y contraseña
sender_email = 'davidar2200@gmail.com'
password = 'wbiw zhzy mfkt dhbf'

# La dirección de correo electrónico del destinatario
receiver_email = 'dvicamp@gmail.com'

# Asunto y cuerpo del correo electrónico
subject = '¡Hola desde Python!'
body = 'Este es un correo electrónico enviado desde Python.'

# Configura el mensaje
message = MIMEMultipart()
message['From'] = sender_email
message['To'] = receiver_email
message['Subject'] = subject

# Adjunta el cuerpo del mensaje
message.attach(MIMEText(body, 'plain'))

# Inicia sesión en el servidor SMTP
with smtplib.SMTP(smtp_server, port) as server:
    server.starttls()  # Inicia la capa de seguridad TLS
    server.login(sender_email, password)
    text = message.as_string()
    # Envía el correo electrónico
    server.sendmail(sender_email, receiver_email, text)

print('Correo electrónico enviado con éxito.')
