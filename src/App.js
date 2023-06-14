import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import "./styles.css";

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t("dp_explr_action_curriculumDrpDwnBtn")}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return <Trans i18nKey="dp_explr_stage_teachSubHeadingLabel" />;
}

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>

      {/* Updations */}
      <div className="parentFlex">

        <div className="Frame1">
          <MyComponent />
        </div>

        <div className="Frame2">
          <div>{t("dp_explr_action_curriculumDrpDwnBtn")}</div>
          <div>{t("dp_explr_action_levelDrpDwnBtn")}</div>
          <div>{t("dp_explr_action_moduleButton")}</div>
          <div>{t("dp_all_flow_upNext")}</div>
        </div>

        <div className="Frame3">
          <div>
<img src="https://81828cdc-a-a995aed9-s-sites.googlegroups.com/a/unishanoi.org/grade4/home/math/number-and-algebra/add-sub/Adding%20and%20Subtracting.png?attachauth=ANoY7coRa6sJJ4QdFgjT5RKUZyc_JSAYdhL2IYlV9zvc3vLV-KUh0yXrY71tRMief0HRP7Mv-TRLs5WuNFmJVyasyJhCg71xQt12S7jsNMzWX-unHYrGy9LNwomlRHzZgyDcWGuIrrhfs-FXznyLQWFmJZXeKIDVcg01SxWuqPPXNn0NZeQ0ztf8JGHg4abVJm2uknRnWKgJcFHBaJfT-JV-F6nuoQWs3qzW8L2udyiOtZWic1kQ0QR17Glx1TZ0Y2xmLQU7qhQYti1B-_Sc9uP6ZubWkiiDaA%3D%3D&attredirects=0" alt="numbers" height={200} width={200}/>
</div>

<div style={{marginLeft:"20px", marginTop:"10px"}}>
  <div>{t("dp_all_flow_level1_module3")}</div>
  <br></br>
  <div style={{fontWeight:"bold", fontSize:"large"}}>{t("dp_all_flow_properties")}</div>
<div>{t("dp_all_flow_topics_lessons")}</div>
<br></br>
<div>{t("dp_all_flow_description")}</div>
</div>
</div>
<div className="buttons">
<button type="button" onClick={() => changeLanguage("en")} style={{fontWeight:"bolder", padding:"10px"}}>
            English
          </button>
          <button type="button" onClick={() => changeLanguage("de")} style={{fontWeight:"bolder", padding:"10px"}}>
            German
          </button></div>
</div>
      
     
    </>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
