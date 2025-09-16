import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader
} from "@ionic/react";
import React, { useState } from "react";

import "./Home.css";
import SpiderChart from "../components/SpiderChart";
import SkillTreeChart from "../components/SkillTreeChart";

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={``} />
          </IonButtons>
          <IonTitle><div className="kbd">c</div></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <SkillTreeChart />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <SpiderChart />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;