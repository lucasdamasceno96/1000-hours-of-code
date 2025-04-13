import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASSWORD } from '../config/env.js';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
    }
})