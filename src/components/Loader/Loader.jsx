import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { SpinnerContainer } from "./Loader.styled";

export default function Spinner () {
    return (
<SpinnerContainer>
    <Loader type="Rings" color="#00BFFF" height={80} width={80} 
    timeout={3000} 
  />
  </SpinnerContainer>)
}