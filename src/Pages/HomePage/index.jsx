import { useState } from "react";

import Conditions from "../../components/Conditions";
import Header from "../../components/Header";
import TeamPlayerMap from "../../components/TeamPlayerMap";
import AuthForm from "../../components/AuthForm";

import styles from "./index.module.css";

export default function HomePage() {
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);
  const [authFormType, setAuthFormType] = useState();

  const openAuthForm = (type) => {
    setAuthFormType(type);
    setIsAuthFormVisible(true);
  };

  const closeAuthForm = () => {
    setIsAuthFormVisible(false);
  };

  return (
    <div>
      {isAuthFormVisible && (
        <AuthForm
          type={authFormType}
          openAuthForm={openAuthForm}
          closeAuthForm={closeAuthForm}
        />
      )}
      <Header openAuthForm={openAuthForm} />
      <Conditions />
      <div className={styles.wrapper}>
        <TeamPlayerMap />
      </div>
    </div>
  );
}
