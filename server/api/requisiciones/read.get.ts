import { readFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async (event) => {
  // Solo permitir solicitudes GET
  if (event.req.method !== "GET") {
    return { success: false, message: "Método no permitido" };
  }

  try {
    // Ruta del archivo JSON
    const filePath = join(process.cwd(), "server/data/requisiciones.json");

    // Leer el contenido del archivo JSON
    const fileContent = await readFile(filePath, "utf-8");
    const requisiciones = JSON.parse(fileContent);

    // Respuesta con los datos obtenidos
    return {
      success: true,
      message: "Datos obtenidos correctamente",
      data: requisiciones,
    };

  } catch (error) {
    console.error("Error al leer las requisiciones:", error);

    // Respuesta de error
    return {
      success: false,
      message: `Error interno: ${error instanceof Error ? error.message : 'Unknown error'}`,
      data: null,
    };
  }
});