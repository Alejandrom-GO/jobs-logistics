import { readFile } from "fs/promises";
import { join } from "path";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Verifica que los datos enviados existen
    if (!body.email || !body.pwd) {
      throw new Error("Faltan datos en la solicitud");
    }

    // Ruta al archivo JSON
    const usersPath = join(process.cwd(), "server/data/users.json");

    // Leer el archivo JSON de manera asíncrona
    const fileContent = await readFile(usersPath, "utf-8");
    const users = JSON.parse(fileContent);

    // Buscar el usuario
    const user = users.find(
      (u: any) => u.email === body.email
    );

    if (!user) {
      return { success: false, message: "Credenciales inválidas", body: body, user };
    }

    // Verificar que la contraseña coincide (comparación directa, no se recomienda)
    if (body.pwd !== user.pwd) {
      return { success: false, message: "Credenciales inválidas", body: body };
    }

    // Generar un token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      "secret_key", // Clave secreta (debería estar en un entorno seguro)
      { expiresIn: "1h" } // El token expirará en 1 hora
    );

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        token,
      },
    };
  } catch (error) {
    console.error("❌ Error en el login:", error);
    return { success: false, message: `Error interno: ${error.message}` };
  }
});
