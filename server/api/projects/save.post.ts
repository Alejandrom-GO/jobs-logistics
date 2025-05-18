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
    if (!body.nombre_proyecto || !body.desc_proyecto || !body.tipo_project || !body.nombre_cliente) {
      return { success: false, message: "Faltan datos obligatorios" };
    }

    // Ruta del archivo JSON
    const filePath = join(process.cwd(), "server/data/projects.json");

    // Verificar si el archivo existe y leer su contenido
    let proyectos = [];
    try {
      const fileContent = await readFile(filePath, "utf-8");
      proyectos = JSON.parse(fileContent);
    } catch (fileError) {
      console.error("Error al leer el archivo:", fileError);
      return { success: false, message: "Error al leer el archivo de proyectos" };
    }

    // Crear nuevo proyecto con un ID único
    const nuevoProyecto = {
      id: proyectos.length + 1,
      nombre_proyecto: body.nombre_proyecto,
      desc_proyecto: body.desc_proyecto,
      tipo_proyecto: body.tipo_proyecto,
      nombre_cliente: body.nombre_cliente,
      pm_asig: body.pm_asig,
      numero_integrantes: body.numero_integrantes,
      inicio_proyecto: body.inicio_proyecto,
      cierre_proyecto: body.cierre_proyecto,
      fecha_creacion: new Date().toISOString(),
    };

    // Agregar el nuevo proyecto al arreglo
    proyectos.push(nuevoProyecto);

    // Guardar los datos actualizados en el archivo JSON
    try {
      await writeFile(filePath, JSON.stringify(proyectos, null, 2), "utf-8");
    } catch (writeError) {
      console.error("Error al escribir el archivo:", writeError);
      return { success: false, message: "Error al guardar el proyecto" };
    }

    // Respuesta de éxito
    return { success: true, message: "Proyecto guardado", data: nuevoProyecto };

  } catch (error) {
    console.error("Error al guardar proyecto:", error);
    return { success: false, message: `Error interno: ${(error as Error).message}` };
  }
});