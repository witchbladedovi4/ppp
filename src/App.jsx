import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Jsxintro from "./dz/JSXlanguage/07jsx-intro";
import ReturningNested from "./dz/JSXlanguage/08returning-nested";
import ReturningDown from "./dz/JSXlanguage/09returning-down";
import ReturningSeveral from "./dz/JSXlanguage/10returning-several";
import ReturningUnclosed from "./dz/JSXlanguage/11returning-unclosed";
import ReturningEmpty from "./dz/JSXlanguage/12returning-empty";
import VariablesInserting from "./dz/JSXlanguage/13variables-inserting";
import VariablesArrays from "./dz/JSXlanguage/15variables-arrays";
import VariablesNuances from "./dz/JSXlanguage/14variables-nuances";
import VariablesObjects from "./dz/JSXlanguage/16variables-objects";
import VariablesAttributes from "./dz/JSXlanguage/17variables-attributes";
import TagsSeveral from "./dz/JSXlanguage/19tags-several";
import TagsMultiLine from "./dz/JSXlanguage/20tags-multi-line";
import TagsClosing from "./dz/JSXlanguage/22tags-closing";
import TagsCorrectness from "./dz/JSXlanguage/23tags-correctness";
import FormsSelectArrayValue from "./dz/Forms/67select-array-value";
import FormsRadio from "./dz/Forms/68forms-radio";
import FormsDefaultValues from "./dz/Forms/69forms-default-values";
import FormsArrayInputsBinding from "./dz/Forms/70-forms-array-inputs-binding";
import FormsObjectInputsBinding from "./dz/Forms/71forms-object-inputs-binding";

import Header from "./Header";
import navItems from "./navigation";
import DataIntro from "./dz/Data/72data-intro";
import DataArrayAdding from "./dz/Data/73data-array-adding";
import DataArrayOperations from "./dz/Data/74data-array-operations";
import DataObjectsArrayAdding from "./dz/Data/75data-objects-array-adding";
import DataObjectsArrayOperations from "./dz/Data/76-data-objects-array-operations";
import DataShowing from "./dz/Data/77data-showing";
import TagsIntro from "./dz/JSXlanguage/18tags-intro";
import TagsReturn from "./dz/JSXlanguage/21tags-return";
import RunningCode from "./dz/JSXlanguage/24running-code";
import ConditionsIntro from "./dz/Terms/25conditions-intro";
import ConditionsShow from "./dz/Terms/26conditions-show";
import ConditionsReturn from "./dz/Terms/27conditions-return";
import ConditionsTernary from "./dz/Terms/28conditions-ternary";
import ConditionsLogicalAnd from "./dz/Terms/29conditions-logical-and";
import ConditionsInverting from "./dz/Terms/30conditions-inverting";
import FunctionsIntro from "./dz/Functions/31functions-intro";
import FunctionsTagsCalling from "./dz/Functions/32functions-tags-calling";
import FunctionsHandlers from "./dz/Functions/33functions-handlers";
import FunctionsHandlersParams from "./dz/Functions/34functions-handlers-params";
import FunctionsEventObject from "./dz/Functions/35functions-event-object";
import FunctionsEventObjectParams from "./dz/Functions/36functions-event-object-params";
import FormingTagsArray from "./dz/FormationTags/37forming-tags-array";
import FormingLoopTagsArray from "./dz/FormationTags/38forming-loop-tags-array";
import FormingTagsArrayData from "./dz/FormationTags/39forming-tags-array-data";
import FormingArrayKeys from "./dz/FormationTags/40forming-array-keys";
import FormingArrayOfObjects from "./dz/FormationTags/41forming-array-of-objects";
import FormingUniqueKeysId from "./dz/FormationTags/42forming-unique-keys-id";
import FormingTable from "./dz/FormationTags/43forming-table";
import IdIntro from "./dz/UniqueId/44id-intro";
import IdProblem from "./dz/UniqueId/45id-problem";
import IdRandomStrings from "./dz/UniqueId/46id-random-strings";
import IdGeneration from "./dz/UniqueId/47id-generation";
import IdFunction from "./dz/UniqueId/48id-function";
import IdFunctionUsing from "./dz/UniqueId/49id-function-using";
import IdFunctionWrongUsing from "./dz/UniqueId/50id-function-wrong-using";
import StatesIntro from "./dz/States/51states-intro";
import StatesUsing from "./dz/States/52states-using";
import StatesReactivity from "./dz/States/53states-reactivity";
import StatesBooleanValue from "./dz/States/54states-boolean-value";
import StatesCounter from "./dz/States/55states-counter";
import FormsInputIntro from "./dz/Forms/56forms-input-intro";
import FormsSelectIntro from "./dz/Forms/64forms-select-intro";
import FormsSelectArray from "./dz/Forms/65forms-select-array";
import FormsSelectValue from "./dz/Forms/66forms-select-value";

const pageMeta = Object.fromEntries(navItems.map((item) => [item.path, item]));

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
            <div className="page-head-row">
              <h2 className="page-title" id="page-title">
                {meta.label}
              </h2>
              <a
                className={`lesson-link${
                  meta.lessonUrl ? "" : " is-placeholder"
                }`}
                href={meta.lessonUrl || "#"}
                title={
                  meta.lessonUrl
                    ? "Открыть урок"
                    : "Впишите ссылку в lessonUrl в src/navigation.js"
                }
                onClick={
                  meta.lessonUrl ? undefined : (event) => event.preventDefault()
                }
                target={meta.lessonUrl ? "_blank" : undefined}
                rel={meta.lessonUrl ? "noreferrer" : undefined}
                aria-disabled={meta.lessonUrl ? undefined : true}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 5h5v5M19 5l-7 7M9 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Ссылка на урок
              </a>
            </div>
          </header>

          <div className="page-body">
            <Routes>
              {/* Язык JSX */}
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
              <Route path="/TagsIntro" element={<TagsIntro />} />
              <Route path="/TagsSeveral" element={<TagsSeveral />} />
              <Route path="/TagsMultiLine" element={<TagsMultiLine />} />
              <Route path="/TagsReturn" element={<TagsReturn />} />
              <Route path="/TagsClosing" element={<TagsClosing />} />
              <Route path="/TagsCorrectness" element={<TagsCorrectness />} />
              <Route path="/RunningCode" element={<RunningCode />} />
              {/* Язык JSX_END */}
              {/* Условия */}
              <Route path="/ConditionsIntro" element={<ConditionsIntro />} />
              <Route path="/ConditionsShow" element={<ConditionsShow />} />
              <Route path="/ConditionsReturn" element={<ConditionsReturn />} />
              <Route
                path="/ConditionsTernary"
                element={<ConditionsTernary />}
              />
              <Route
                path="/ConditionsLogicalAnd"
                element={<ConditionsLogicalAnd />}
              />
              <Route
                path="/ConditionsInverting"
                element={<ConditionsInverting />}
              />
              {/* Условия_END */}
              {/* Функции */}
              <Route path="/FunctionsIntro" element={<FunctionsIntro />} />
              <Route
                path="/FunctionsTagsCalling"
                element={<FunctionsTagsCalling />}
              />
              <Route
                path="/FunctionsHandlers"
                element={<FunctionsHandlers />}
              />
              <Route
                path="/FunctionsHandlersParams"
                element={<FunctionsHandlersParams />}
              />
              <Route
                path="/FunctionsEventObject"
                element={<FunctionsEventObject />}
              />
              <Route
                path="/FunctionsEventObjectParams"
                element={<FunctionsEventObjectParams />}
              />
              {/* Функции_END */}

              {/* Формирование тегов */}
              <Route path="/FormingTagsArray" element={<FormingTagsArray />} />
              <Route
                path="/FormingLoopTagsArray"
                element={<FormingLoopTagsArray />}
              />
              <Route
                path="/FormingTagsArrayData"
                element={<FormingTagsArrayData />}
              />
              <Route path="/FormingArrayKeys" element={<FormingArrayKeys />} />
              <Route
                path="/FormingArrayOfObjects"
                element={<FormingArrayOfObjects />}
              />
              <Route
                path="/FormingUniqueKeysId"
                element={<FormingUniqueKeysId />}
              />
              <Route path="/FormingTable" element={<FormingTable />} />
              {/* Формирование тегов_END */}

              {/* Уникальные ключи */}
              <Route path="/IdIntro" element={<IdIntro />} />
              <Route path="/IdProblem" element={<IdProblem />} />
              <Route path="/IdRandomStrings" element={<IdRandomStrings />} />
              <Route path="/IdGeneration" element={<IdGeneration />} />
              <Route path="/IdFunction" element={<IdFunction />} />
              <Route path="/IdFunctionUsing" element={<IdFunctionUsing />} />
              <Route path="/IdFunctionWrongUsing" element={<IdFunctionWrongUsing />} />
              {/* Уникальные ключи_END */}

              {/* Стейты */}
              <Route path="/StatesIntro" element={<StatesIntro />} />
              <Route path="/StatesUsing" element={<StatesUsing />} />
              <Route path="/StatesReactivity" element={<StatesReactivity />} />
              <Route path="/StatesBooleanValue" element={<StatesBooleanValue />} />
              <Route path="/StatesCounter" element={<StatesCounter />} />
              {/* Стейты_END */}

              {/* Формы */}
              <Route path="/FormsInputIntro" element={<FormsInputIntro />} />
              <Route path="/FormsSelectIntro" element={<FormsSelectIntro />} />
              <Route path="/FormsSelectArray" element={<FormsSelectArray />} />
              <Route path="/FormsSelectValue" element={<FormsSelectValue />} />
              <Route path="/FormsSelectArrayValue" element={<FormsSelectArrayValue />} />
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
              <Route path="/DataIntro" element={<DataIntro />} />
              <Route path="/DataArrayAdding" element={<DataArrayAdding />} />
              <Route
                path="/DataArrayOperations"
                element={<DataArrayOperations />}
              />
              <Route
                path="/DataObjectsArrayAdding"
                element={<DataObjectsArrayAdding />}
              />
              <Route
                path="/DataObjectsArrayOperations"
                element={<DataObjectsArrayOperations />}
              />
              {/* Формы_END */}
              <Route path="/DataShowing" element={<DataShowing />} />
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
