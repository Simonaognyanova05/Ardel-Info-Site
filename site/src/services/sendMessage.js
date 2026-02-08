import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from "emailjs-com";

emailjs.init("UGtKXqGnR4WTiD8xP");

export async function sendMessage(name, email, message) {
    try {
        // 1️⃣ Запис във Firestore
        await addDoc(collection(db, "messages"), {
            name,
            email,
            message,
            createdAt: new Date()
        });

        // 2️⃣ Изпращане на имейл
        await emailjs.send(
            "service_o8l03ml",
            "template_p5r3zos",
            {
                name,
                email,
                message,
                to_email: "ardel.group@abv.bg"
            }
        );

        return { status: 200, message: "Съобщението е изпратено успешно!" };
    } catch (error) {
        console.error("Грешка:", error);
        return { status: 500, message: "Възникна грешка при изпращането!" };
    }
}
