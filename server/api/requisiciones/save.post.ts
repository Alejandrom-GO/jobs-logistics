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
    if (!body.nombre_puesto || !body.nombre_proyecto || !body.area_solicitante) {
      return { success: false, message: "Faltan datos obligatorios" };
    }

    // Ruta del archivo JSON
    const filePath = join(process.cwd(), "server/data/requisiciones.json");

    // Verificar si el archivo existe y leer su contenido
    let requisiciones = [];
    try {
      const fileContent = await readFile(filePath, "utf-8");
      requisiciones = JSON.parse(fileContent);
    } catch (fileError) {
      console.error("Error al leer el archivo:", fileError);
      return { success: false, message: "Error al leer el archivo de requisiciones" };
    }

    // Crear nueva requisición con un ID único
    const nuevaRequisicion = {
      id: requisiciones.length + 1,
      nombre_puesto: body.nombre_puesto,
      nombre_proyecto: body.nombre_proyecto,
      area_solicitante: body.area_solicitante,
      estado: "Pendiente",
      fecha: new Date().toISOString(),
      fecha_solicitud: body.fecha_solicitud,
      tipo_proyecto: body.tipo_proyecto,
      numero_vacantes: body.numero_vacantes,
      inicio_proyecto: body.inicio_proyecto,
      cierre_proyecto: body.cierre_proyecto,
      sueldo_hora: body.sueldo_hora,
      sueldo_mensual: body.sueldo_mensual,
      bono_desempeno: body.bono_desempeno,
      comisiones_venta: body.comisiones_venta,
      apoyo_transporte: body.apoyo_transporte,
      promedio_mensual: body.promedio_mensual,
      total_mensual: body.total_mensual,
      dias_laborar: body.dias_laborar,
      hora_entrada: body.hora_entrada,
      hora_salida: body.hora_salida,
      nivel_requerido: body.nivel_requerido,
      conocimientos: body.conocimientos,
      observaciones: body.observaciones,
      actividades: body.actividades,
    };

    // Agregar la nueva requisición al arreglo
    requisiciones.push(nuevaRequisicion);

    // Guardar los datos actualizados en el archivo JSON
    try {
      await writeFile(filePath, JSON.stringify(requisiciones, null, 2), "utf-8");
    } catch (writeError) {
      console.error("Error al escribir el archivo:", writeError);
      return { success: false, message: "Error al guardar la requisición" };
    }

    // Respuesta de éxito
    return { success: true, message: "Requisición guardada", data: nuevaRequisicion };

  } catch (error) {
    console.error("Error al guardar requisición:", error);
    return { success: false, message: `Error interno: ${error.message}` };
  }
});
