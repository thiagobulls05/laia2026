import { PlantillaSecreto } from "../../components/PlantillSecreto";
import { useGame } from "../../context/GameContext";
import { ACTIVITIES } from '../../utils/gameUtils'
import { GestorFoto } from "../../components/GestorFoto";

export const SecretoVoltone = () => {
  const { gameState, savePhoto } = useGame();
  
  return (
    <PlantillaSecreto
      titulo="El Voltone de Palazzo del Podestà"
      descripcion="Bajo la gran bóveda del Palacio del Podestà, en la Plaza Mayor, 
      se esconde un sorprendente efecto acústico. Si dos personas se colocan en 
      esquinas opuestas y susurran a las columnas, sus voces se propagan a lo largo 
      de las paredes, lo que les permite comunicarse sin ser oídas por quienes se 
      hallen en el centro. Se cuenta que este particular medio de comunicación se 
      utilizaba para hacer confesar a los leprosos, pero nadie sabe la verdad."
      tituloUbicacion="El Voltone de Palazzo del Podestà"
      urlGoogleMaps="https://maps.app.goo.gl/H1c4aWYJELHvoxRt8"
      srcEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.025478489841!2d11.341546815070888!3d44.49414474098428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4be278b0fc5%3A0xeef3d570347daae!2sPalacio%20del%20Podest%C3%A0!5e0!3m2!1ses!2ses!4v1782324345570!5m2!1ses!2ses"
    >
      <GestorFoto 
        fotoUrl={gameState.fotos[ACTIVITIES.SECRETO(4)]}
        onFotoSubida={(base64) => savePhoto(ACTIVITIES.SECRETO(4), base64)}
        pieDeFoto="¡Voltone descubierto!"
      />
    </PlantillaSecreto>
  );
};