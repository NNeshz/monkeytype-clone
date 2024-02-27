import { useEffect } from "react";

import { useAppStore } from "./state/appStore";

import InputText from "./components/InputText";
import NavConfig from "./components/NavConfig";
import Timer from "./components/Timer";
import Container from "./components/ui/Container";

export default function App() {

  const userText = useAppStore(state => state.userText);
  const setText = useAppStore(state => state.setText);

  useEffect(() => {
    setText("EN");
  }, [])

  return (
    <Container>
      <Timer />
      <NavConfig />
      <InputText />
      <div>
        <p>{userText}</p>
      </div>
    </Container>
  )
}
