import NosInteresa from "../components/NosInteresa";
import SliderMain from "../components/SilderMain";
import "../styles/home.css"
const Home = () => {
  return ( 
    <div className="containerMain">
      <SliderMain />
      <NosInteresa />
    </div>
   );
}
 
export default Home;