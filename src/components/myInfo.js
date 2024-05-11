import * as React from "react";
import { Link } from "gatsby";
import { LiaAtSolid, LiaGithub, LiaLinkedinIn, LiaPhoneSolid } from "react-icons/lia";

const MyInfo = () => {
  return(
    <div className="lg:pt-32 mb-10 lg:mb-0">
      <h1 className="text-6xl text-gray-900 font-bold mb-4">Hi, It's Jay!</h1>
      <h2 className="text-3xl text-gray-700 mb-4">Frontend Developer</h2>
      <ul className="text-gray-500 mb-8 flex flex-row justify-start gap-x-3 text-3xl">
        <li>
          <a href="mailto:me@jirayu.in.th"><LiaAtSolid/></a>
        </li>
        <li>
          <a href="https://github.com/IronGhost63"><LiaGithub/></a>
        </li>
        <li className="flex flex-row gap-x-1 items-center">
          <a href="https://www.linkedin.com/in/jirayu-yingthawornsuk"><LiaLinkedinIn/></a>
        </li>
      </ul>
      <Link to="/works" className="inline-block border border-gray-600 hover:border-sky-500 hover:text-sky-500 px-4 py-2">My Works</Link>
    </div>
  );
}

export default MyInfo;
