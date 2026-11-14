import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Jsxintro from "./dz/07jsx-intro";
import ReturningNested from "./dz/08returning-nested";
import ReturningDown from "./dz/09returning-down";
import ReturningSeveral from "./dz/10returning-several";
import ReturningUnclosed from "./dz/11returning-unclosed";
import ReturningEmpty from "./dz/12returning-empty";
import VariablesInserting from "./dz/13variables-inserting";
import VariablesArrays from "./dz/15variables-arrays";
import VariablesNuances from "./dz/14variables-nuances";
import VariablesObjects from "./dz/16variables-objects";
import VariablesAttributes from "./dz/17variables-attributes";
import TagsSeveral from "./dz/19tags-several";
import TagsMultiLine from "./dz/20tags-multi-line";
import TagsClosing from "./dz/22tags-closing";
import TagsCorrectness from "./dz/23tags-correctness";
import SelectIntro from "./dz/64select-intro";
import SelectArray from "./dz/65select-array";
import SelectValue from "./dz/66select-value";
import SelectArrayValue from "./dz/67select-array-value";
import FormsRadio from "./dz/68forms-radio";
import FormsDefaultValues from "./dz/69forms-default-values";
import FormsArrayInputsBinding from "./dz/70-forms-array-inputs-binding";
import FormsObjectInputsBinding from "./dz/71forms-object-inputs-binding";

import Header from "./Header";
import navItems from "./navigation";

const pageMeta = Object.fromEntries(
  navItems.map((item) => [item.path, item])
);

function AppLayout() {
  const location = useLocation();
  const meta = pageMeta[location.pathname] ?? navItems[0];

  useEffect(() => {
    document.title = `${meta.label} · React Homework`;
  }, [meta]);

  return (
    <>
      <Header />

      <main className="content">
        <section
          className="page"
          key={location.pathname}
          aria-labelledby="page-title"
        >
          <header className="page-head">
            <span className="page-kicker">Exercise</span>
            <h2 className="page-title" id="page-title">
              {meta.label}
            </h2>
          </header>

          <div className="page-body">
            <Routes>
              <Route path="/" element={<Jsxintro />} />
              <Route path="/Jsxintro" element={<Jsxintro />} />
              <Route path="/ReturningNested" element={<ReturningNested />} />
              <Route path="/ReturningDown" element={<ReturningDown />} />
              <Route path="/ReturningSeveral" element={<ReturningSeveral />} />
              <Route
                path="/ReturningUnclosed"
                element={<ReturningUnclosed />}
              />
              <Route path="/ReturningEmpty" element={<ReturningEmpty />} />
              <Route
                path="/VariablesInserting"
                element={<VariablesInserting />}
              />
              <Route path="/VariablesNuances" element={<VariablesNuances />} />
              <Route path="/VariablesArrays" element={<VariablesArrays />} />
              <Route path="/VariablesObjects" element={<VariablesObjects />} />
              <Route
                path="/VariablesAttributes"
                element={<VariablesAttributes />}
              />
              <Route path="/TagsSeveral" element={<TagsSeveral />} />
              <Route path="/TagsMultiLine" element={<TagsMultiLine />} />
              <Route path="/TagsClosing" element={<TagsClosing />} />
              <Route path="/TagsCorrectness" element={<TagsCorrectness />} />
              <Route path="/SelectIntro" element={<SelectIntro />} />
              <Route path="/SelectArray" element={<SelectArray />} />
              <Route path="/SelectValue" element={<SelectValue />} />
              <Route path="/SelectArrayValue" element={<SelectArrayValue />} />
              <Route path="/FormsRadio" element={<FormsRadio />} />
              <Route
                path="/FormsDefaultValues"
                element={<FormsDefaultValues />}
              />
              <Route
                path="/FormsArrayInputsBinding"
                element={<FormsArrayInputsBinding />}
              />
              <Route
                path="/FormsObjectInputsBinding"
                element={<FormsObjectInputsBinding />}
              />
            </Routes>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
