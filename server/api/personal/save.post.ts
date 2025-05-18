import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async (event) => {
  if (event.req.method !== "POST") {
    return { success: false, message: "Método no permitido" };
  }

  try {
    // Leer los datos del cuerpo de la solicitud
    const body = await readBody(event);
    console.log("Datos recibidos:", body); // Verificación de los datos recibidos

    // Verificación de datos obligatorios
    if (!body.nombre || !body.apellido_paterno || !body.apellido_materno || !body.tipo_area || !body.tipo_puesto) {
      return { success: false, message: "Faltan datos obligatorios" };
    }

    // Ruta del archivo JSON
    const filePath = join(process.cwd(), "server/data/personal.json");

    // Verificar si el archivo existe y leer su contenido
    let personal = [];
    try {
      const fileContent = await readFile(filePath, "utf-8");
      personal = JSON.parse(fileContent);
    } catch (fileError) {
      console.error("Error al leer el archivo:", fileError);
      return { success: false, message: "Error al leer el archivo de personal" };
    }

    // Crear nuevo personal con un ID único
    const nuevoPersonal = {
      id: personal.length + 1,
      nombre: body.nombre,
      apellido_paterno: body.apellido_paterno,
      apellido_materno: body.apellido_materno,
      tipo_area: body.tipo_area,
      tipo_puesto: body.tipo_puesto,
    };

    // Agregar el nuevo personal al arreglo
    personal.push(nuevoPersonal);

    // Guardar los datos actualizados en el archivo JSON
    try {
      await writeFile(filePath, JSON.stringify(personal, null, 2), "utf-8");
    } catch (writeError) {
      console.error("Error al escribir el archivo:", writeError);
      return { success: false, message: "Error al guardar el personal" };
    }

    // Respuesta de éxito
    return { success: true, message: "Personal guardado", data: nuevoPersonal };

  } catch (error) {
    console.error("Error al guardar personal:", error);
    return { success: false, message: `Error interno: ${(error as Error).message}` };
  }
});