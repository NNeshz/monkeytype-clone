import InputText from "./components/InputText";
import NavConfig from "./components/NavConfig";
import Timer from "./components/Timer";
import Container from "./components/ui/Container";

export default function App() {

  return (
    <Container>
      <Timer />
      <NavConfig />
      <InputText />
    </Container>
  )
}
