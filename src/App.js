import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//styles
import "./styles/App.scss";

// pages
// import BottomNav from "./components/navigation/BottomNav";
import TopHeader from "./components/navigation/TopHeader";
import Landing from "./pages/Landing";
import TwoChoices from "./components/customer/TwoChoices";
import ChoiceKnow from "./components/customer/ChoiceKnow";
import Taste from "./components/customer/knowChoices/Taste";
import Smell from "./components/customer/knowChoices/Smell";
import MostImportant from "./components/customer/helpSurvey/MostImportant";
import SecondImportance from "./components/customer/helpSurvey/SecondImportance";
import NeedChoices from "./components/customer/helpSurvey/NeedChoices";
import TasteChoices from "./components/customer/helpSurvey/TasteChoices";
import SmellChoices from "./components/customer/helpSurvey/SmellChoices";
import Terpenes from "./components/customer/knowChoices/Terpenes";
import Cannabinoid from "./components/customer/knowChoices/Cannabinoid";
import StrainType from "./components/customer/StrainType";
import Dominance from "./components/customer/Dominance";
import KnowPost from "./components/customer/postRequests/KnowPost";
import SurveyPost from "./components/customer/postRequests/SurveyPost";
import MoreTHC from "./components/customer/knowChoices/MoreTHC";
import MoreCBD from "./components/customer/knowChoices/MoreCBD";
import ClientList from "./components/budTender/ClientList";
import IndividualClient from "./components/budTender/IndividualClient";
import KnowResponse from "./components/customer/postRequests/KnowResponse";
import Login from "./components/auth/Login";
import Protected from "./components/auth/Protected";

function App() {
  // If application grows any larger, I recommend REDUX Toolkit for state management
  const [userName, setUserName] = useState("");
  const [mostImportant, setMostImportant] = useState("");
  const [secondImportant, setSecondImportant] = useState("");
  const [thirdImportant, setThirdImportant] = useState("");

  const [condition, setCondition] = useState("");
  const [tasteChoice, setTasteChoice] = useState(0);
  const [smellChoice, setSmellChoice] = useState(0);

  const [cannabinoid, setCannabinoid] = useState(0);
  const [terpene, setTerpene] = useState(0);

  const [dominance, setDominance] = useState({});
  const [strainType, setStrainType] = useState({});
  const [thcLevels, setThcLevels] = useState(0);
  const [cbdLevels, setCbdLevels] = useState(0);

  const [selections, setSelections] = useState([]);

  return (
    <div className="pages">
      <TopHeader />

      {/* --------------------------------------First Questions----------------------------------- */}
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              userName={userName}
              setUserName={setUserName}
              setMostImportant={setMostImportant}
              setSecondImportant={setSecondImportant}
              setThirdImportant={setThirdImportant}
            />
          }
        />
        <Route
          exact
          path="/two-choices"
          element={<TwoChoices userName={userName} />}
        />

        {/* --------------------------------------Know what you want questions----------------------------------- */}
        <Route exact path="/know" element={<ChoiceKnow />} />
        <Route
          exact
          path="/taste"
          element={
            <Taste tasteChoice={tasteChoice} setTasteChoice={setTasteChoice} />
          }
        />
        <Route
          exact
          path="/smell"
          element={
            <Smell smellChoice={smellChoice} setSmellChoice={setSmellChoice} />
          }
        />
        <Route
          exact
          path="/terpene"
          element={<Terpenes setTerpene={setTerpene} terpene={terpene} />}
        />
        <Route
          exact
          path="/cannabinoid"
          element={
            <Cannabinoid
              setCannabinoid={setCannabinoid}
              cannabinoid={cannabinoid}
            />
          }
        />

        {/* --------------------------------------Set Strain and Dominance Questions----------------------------------- */}

        <Route
          exact
          path="/strains"
          element={
            <StrainType
              setStrainType={setStrainType}
              strainType={strainType}
              dominance={dominance}
              setDominance={setDominance}
              mostImportant={mostImportant}
              secondImportant={secondImportant}
            />
          }
        />
        <Route
          exact
          path="/dominance"
          element={
            <Dominance
              setStrainType={setStrainType}
              strainType={strainType}
              dominance={dominance}
              setDominance={setDominance}
              mostImportant={mostImportant}
            />
          }
        />
        <Route
          exact
          path="/thc-levels"
          element={
            <MoreTHC
              thcLevels={thcLevels}
              setThcLevels={setThcLevels}
              mostImportant={mostImportant}
            />
          }
        />
        <Route
          exact
          path="/cbd-levels"
          element={
            <MoreCBD cbdLevels={cbdLevels} setCbdLevels={setCbdLevels} />
          }
        />
        {/* --------------------------------------Post Request Review----------------------------------- */}
        <Route
          exact
          path="/know-post"
          element={
            <KnowPost
              setStrainType={setStrainType}
              strainType={strainType}
              dominance={dominance}
              setDominance={setDominance}
              smellChoice={smellChoice}
              tasteChoice={tasteChoice}
              terpene={terpene}
              cannabinoid={cannabinoid}
              userName={userName}
              selections={selections}
              setSelections={setSelections}
            />
          }
        />
        <Route
          exact
          path="/results"
          element={
            <KnowResponse
              userName={userName}
              selections={selections}
              setSelections={setSelections}
            />
          }
        />

        <Route path="/users">
          <Route path=":searchId" element={<IndividualClient />} />
        </Route>

        <Route
          exact
          path="/survey-post"
          element={
            <SurveyPost
              setStrainType={setStrainType}
              strainType={strainType}
              dominance={dominance}
              setDominance={setDominance}
              condition={condition}
              setCondition={setCondition}
              mostImportant={mostImportant}
              secondImportant={secondImportant}
              thirdImportant={thirdImportant}
              smellChoice={smellChoice}
              tasteChoice={tasteChoice}
              userName={userName}
              thcLevels={thcLevels}
              cbdLevels={cbdLevels}
            />
          }
        />

        {/* --------------------------------------Active Surveys----------------------------------- */}

        <Route exact path="/dispensary/login" element={<Login />} />
        <Route
          exact
          path="/dispensary/:id/client-list"
          element={
            <Protected>
              <ClientList
                setStrainType={setStrainType}
                strainType={strainType}
                dominance={dominance}
                setDominance={setDominance}
                condition={condition}
                setCondition={setCondition}
                mostImportant={mostImportant}
                secondImportant={secondImportant}
                thirdImportant={thirdImportant}
                smellChoice={smellChoice}
                tasteChoice={tasteChoice}
                userName={userName}
              />
            </Protected>
          }
        />

        {/* --------------------------------------Survey questions----------------------------------- */}
        <Route
          path="/survey"
          element={
            <MostImportant
              setMostImportant={setMostImportant}
              mostImportant={mostImportant}
              secondImportant={secondImportant}
              setSecondImportant={setSecondImportant}
              setThirdImportant={setThirdImportant}
              thirdImportant={thirdImportant}
            />
          }
        />
        <Route
          path="/question-two"
          element={
            <SecondImportance
              setMostImportant={setMostImportant}
              mostImportant={mostImportant}
              secondImportant={secondImportant}
              setSecondImportant={setSecondImportant}
              setThirdImportant={setThirdImportant}
              thirdImportant={thirdImportant}
            />
          }
        />
        <Route
          path="/need-choices"
          element={
            <NeedChoices
              condition={condition}
              setCondition={setCondition}
              thirdImportant={thirdImportant}
              mostImportant={mostImportant}
              secondImportant={secondImportant}
            />
          }
        />
        <Route
          path="/taste-choices"
          element={
            <TasteChoices
              tasteChoice={tasteChoice}
              setTasteChoice={setTasteChoice}
              thirdImportant={thirdImportant}
              mostImportant={mostImportant}
              secondImportant={secondImportant}
            />
          }
        />
        <Route
          path="/smell-choices"
          element={
            <SmellChoices
              smellChoice={smellChoice}
              setSmellChoice={setSmellChoice}
              thirdImportant={thirdImportant}
              mostImportant={mostImportant}
              secondImportant={secondImportant}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
