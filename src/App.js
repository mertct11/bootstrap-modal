import "bootstrap/dist/css/bootstrap.css";
import ModalComponent from "./BootstrapModal/index";
import { useEffect, useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);
  return (
    <>
      <ModalComponent
        isVisible={isVisible}
        isSuccess
        status={"success"}
        description={"Kullanıcı başari ile silindi."}
      />
    </>
  );
}

export default App;
