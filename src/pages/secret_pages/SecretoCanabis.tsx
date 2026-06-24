import { PlantillaSecreto } from "../../components/PlantillSecreto";
import { useGame } from "../../context/GameContext";
import { ACTIVITIES } from '../../utils/gameUtils'
import { GestorFoto } from "../../components/GestorFoto";

export const SecretoCanabis = () => {
  const { gameState, savePhoto } = useGame();
  
  return (
    <PlantillaSecreto
      titulo="Canabis Protectio"
      descripcion="En el techo del pórtico al principio de la Via dell'Indipendenza
       figura una insólita inscripción en latín: «Panis Vita, Canabis Protectio, 
       Vinum Laetitia». Esta expresión significa «El pan es vida, el cáñamo es protección, 
       el vino es alegría» e indica la importancia del cáñamo para la economía boloñesa 
       en la Edad Media, un recurso valioso para la producción de tejidos y cuerdas."
      tituloUbicacion="Canabis Protectio"
      urlGoogleMaps="https://maps.app.goo.gl/AxqQJibPUeKWcJpz6"
      srcEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.973207151852!2d11.340250512278917!3d44.495215797445425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd495e515ed8b%3A0xb2328340e5535611!2sVia%20dell&#39;Indipendenza%2C%203%2C%2040125%20Bologna%20BO%2C%20Italia!5e0!3m2!1ses!2ses!4v1782324507607!5m2!1ses!2ses"
    >
      <GestorFoto 
        fotoUrl={gameState.fotos[ACTIVITIES.SECRETO(5)]}
        onFotoSubida={(base64) => savePhoto(ACTIVITIES.SECRETO(5), base64)}
        pieDeFoto="¡Canabis Protectio descubierto!"
      />
    </PlantillaSecreto>
  );
};