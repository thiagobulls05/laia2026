# Gincana Digital: Bolonia y más allá

## Descripción del Proyecto

Este proyecto es una Web App (SPA) tipo "Gincana" diseñada para acompañar un viaje. El objetivo es guiar al usuario a través de diferentes etapas de un viaje, desbloqueando pistas y retos a medida que se completa el progreso.

## Stack Tecnológico

- **Framework:** React con TypeScript (Vite).
- **Backend/Base de Datos:** Firebase Firestore (Configurado en modo persistente offline).
- **Gestión de Estado:** React Context API (GameContext).
- **Procesamiento:** Funciones de utilidades para compresión de imágenes a Base64.

## Arquitectura de Datos

El juego funciona mediante un estado centralizado (`GameStage`) que determina qué pantallas son accesibles.

- **GameStage:** `inicio` | `aeropuerto` | `hotel` | `bolonia` | `final`
- **Persistencia:** Todas las fotos (retos) se guardan como cadenas Base64 dentro de un documento único en Firestore (`gincana/laia_data`).
- **Navegación:** La lógica de acceso está centralizada en `utils/gameUtils.ts`.

## Estructura de Carpetas

- `/src/components`: Componentes visuales reutilizables.
- `/src/config`: Inicialización de Firebase.
- `/src/context`: Lógica de estado global (`GameContext`).
- `/src/pages`: Pantallas principales de navegación.
- `/src/utils`: Lógica de negocio (compresión, reglas de acceso).
- `/src/assets`: Recursos estáticos.

## Flujo de Pantallas y Navegación

### Flujo Principal (Lineal)

- **`Inicio.tsx`**: Bienvenida y cuenta atrás (14 ago 6:30am). Acceso a 'Equipaje'.
- **`Equipaje.tsx`**: Lista de verificación (Checkbox). Animación al completar.
- **`Aeropuerto.tsx`**: Cuenta atrás (14 ago 7:50am) y enlace a Maps.
- **`Vuelo.tsx`**: Check-in hotel y geolocalización (botón aparece al llegar al hotel).

### Home de Bolonia (Nodo central)

- **`BoloniaHome.tsx`**: Tarjetas clicables con estado (transparencia/filtro verde). Desbloquea 'Final' al completar todo.
  - **`SieteSecretos.tsx`**: Contenedor de las 7 pantallas de secretos.
    - **`Secreto[1-7].tsx`**: Información + Carga de foto (obligatoria para marcar como completado).
  - **`VistasAlturas.tsx`**: Información + Carga de foto.
  - **`CenaRomantica.tsx`**: Información + Carga de foto.
  - **`GaleriaRecuerdos.tsx`**: Mosaico de fotos subidas vs. candados.

### Cierre

- **`Final.tsx`**: Mensaje de felicitación tras completar todas las actividades.
