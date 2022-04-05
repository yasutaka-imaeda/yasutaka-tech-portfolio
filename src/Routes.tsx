import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./views/pages/Main";
import About from "./views/pages/About";
import Skills from "./views/pages/Skills";
import Works from "./views/pages/Works";

export const Path = {
  home: "/",
  about: "/about",
  skills: "/skills",
  works: "/works",
};

const Routess: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<Main />} />
        <Route path={Path.about} element={<About />} />
        <Route path={Path.skills} element={<Skills />} />
        <Route path={Path.works} element={<Works />} />
      </Routes>
    </div>
  );
};

export default Routess;
