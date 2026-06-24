import { PlantillaSecreto } from "../../components/PlantillSecreto";
import { useGame } from "../../context/GameContext";
import { ACTIVITIES } from '../../utils/gameUtils'
import { GestorFoto } from "../../components/GestorFoto";

export const SecretoFlechas = () => {
  const { gameState, savePhoto } = useGame();
  
  return (
    <PlantillaSecreto
      titulo="Las tres flechas de Corte Isolani"
      descripcion="Tres misteriosas flechas se encuentran incrustadas en 
      el techo de madera del pórtico de Corte Isolani, en Strada Maggiore. 
      Según la leyenda, se las dispararon tres bandidos que querían dar muerte 
      a un escudero boloñés. Pero, cuando una mujer semidesnuda apareció en una 
      ventana, los malhechores se distrajeron y erraron su puntería. 
      Desde entonces permanecen allí clavadas."
      tituloUbicacion="Las tres flechas de Corte Isolani"
      urlGoogleMaps="https://maps.app.goo.gl/mUpJM4pzpTTN7QL88"
      srcEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.071418551508!2d11.346224012278837!3d44.493203397577524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4b92d4e7f09%3A0x7edf14a07567d18c!2sStr.%20Maggiore%2C%2019%2C%2040125%20Bologna%20BO%2C%20Italia!5e0!3m2!1ses!2ses!4v1782324063188!5m2!1ses!2ses"
    >
      <GestorFoto 
        fotoUrl={gameState.fotos[ACTIVITIES.SECRETO(3)]}
        onFotoSubida={(base64) => savePhoto(ACTIVITIES.SECRETO(3), base64)}
        pieDeFoto="¡Flechas descubiertas!"
      />
    </PlantillaSecreto>
  );
};