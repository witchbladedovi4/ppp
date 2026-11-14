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
import TagsCorrectness from "./dz/tags-correctness";

import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectIntro from "./dz/64select-intro";
import SelectArray from "./dz/65select-array";
import SelectValue from "./dz/66select-value";
import SelectArrayValue from "./dz/67select-array-value";
import FormsRadio from "./dz/68forms-radio";
import FormsDefaultValues from "./dz/69forms-default-values";
import FormsArrayInputsBinding from "./dz/70-forms-array-inputs-binding";
import FormsObjectInputsBinding from "./dz/71forms-object-inputs-binding";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Jsxintro />} />
          <Route path="/Jsxintro" element={<Jsxintro />} />
          <Route path="/ReturningNested" element={<ReturningNested />} />
          <Route path="/ReturningDown" element={<ReturningDown />} />
          <Route path="/ReturningSeveral" element={<ReturningSeveral />} />
          <Route path="/ReturningUnclosed" element={<ReturningUnclosed />} />
          <Route path="/ReturningEmpty" element={<ReturningEmpty />} />
          <Route path="/VariablesInserting" element={<VariablesInserting />} />
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
          <Route path="/FormsDefaultValues" element={<FormsDefaultValues />} />
          <Route path="/FormsArrayInputsBinding" element={<FormsArrayInputsBinding />} />
          <Route path="/FormsObjectInputsBinding" element={<FormsObjectInputsBinding />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
