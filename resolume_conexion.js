const RESOLUME_API_URL = "http://localhost:8080/api/v1";

async function sendCommand(endpoint) {
  try {
    const response = await fetch(`${RESOLUME_API_URL}/${endpoint}`, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    console.log(`Comando enviado: ${endpoint}`);
  } catch (error) {
    console.error("Error al enviar el comando:", error);
  }
}