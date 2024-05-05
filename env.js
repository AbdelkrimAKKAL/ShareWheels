// env.js
const API_IP_ADDRESS = '192.168.1.3';//change this
const MYSQL_HOST = "127.0.0.1";
const MYSQL_USER = "root";//change this
const MYSQL_PASSWORD = "";//change this
const MYSQL_DATABASE = "sharewheels";//change this

const JWT_SECRET = "bI4Ygtdx4ayp1dI2Es6ppl8DI3JPUKOR";
const JWT_LIFETIME = "30d";

// email 
const USER="sharewheelsapp@gmail.com"//dont touch
const APP_PASSWORD="afwm auug zmbz ooiz"//dont touch

const EMAIL_RECEIVER="abdelkrimakkal1@gmail.com"//choose your email
//where you want to receive the email with the code verification

module.exports = {
    API_IP_ADDRESS,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    JWT_SECRET,
    JWT_LIFETIME,
    USER,
    APP_PASSWORD,
    EMAIL_RECEIVER
};
