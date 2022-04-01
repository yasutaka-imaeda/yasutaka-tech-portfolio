import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./views/pages/Main";
import About from "./views/pages/About";
import Skills from "./views/pages/Skills";

export const Path = {
  home: "/",
  about: "/about",
  skills: "/skills",
};

const Routess: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<Main />} />
        <Route path={Path.about} element={<About />} />
        <Route path={Path.skills} element={<Skills />} />
      </Routes>
    </div>
  );
};

export default Routess;
