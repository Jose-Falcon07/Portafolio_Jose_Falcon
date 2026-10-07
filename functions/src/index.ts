import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";
import {FieldValue, getFirestore} from "firebase-admin/firestore";

setGlobalOptions({
  maxInstances: 10,
  region: "us-central1",
});

initializeApp();

const db = getFirestore();

interface ContactRequest {
  name?: string;
  email?: string;
  subject?: string;
  phone?: string;
  message?: string;
}

export const submitContact = onRequest(
  {
    cors: true,
    maxInstances: 10,
  },
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({
        success: false,
        message: "Método no permitido.",
      });
      return;
    }

    try {
      const data = request.body as ContactRequest;

      const name = data.name?.trim();
      const email = data.email?.trim();
      const subject = data.subject?.trim();
      const phone = data.phone?.trim() ?? "";
      const message = data.message?.trim();

      if (!name || !email || !subject || !message) {
        response.status(400).json({
          success: false,
          message: "Faltan campos obligatorios.",
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        response.status(400).json({
          success: false,
          message: "Correo electrónico inválido.",
        });
        return;
      }

      if (
        name.length > 100 ||
        email.length > 150 ||
        subject.length > 150 ||
        phone.length > 30 ||
        message.length > 3000
      ) {
        response.status(400).json({
          success: false,
          message: "Uno o más campos exceden la longitud permitida.",
        });
        return;
      }

      await db.collection("contactMessages").add({
        name,
        email,
        subject,
        phone,
        message,
        createdAt: FieldValue.serverTimestamp(),
        status: "new",
      });

      response.status(200).json({
        success: true,
        message: "Mensaje enviado correctamente.",
      });
    } catch (error) {
      console.error("Error guardando mensaje:", error);

      response.status(500).json({
        success: false,
        message: "No se pudo enviar el mensaje.",
      });
    }
  }
);
