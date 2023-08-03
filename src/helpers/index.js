export const formatearCantidad = (cantidad) => {
  return Number(cantidad).toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
  });
};

export const generarId = () => {
  const fecha = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);

  return fecha + random;
};

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-Es", opciones);
};
