import * as React from "react";
import { Link } from "gatsby";
import { LiaAtSolid, LiaGithub, LiaLinkedinIn, LiaPhoneSolid } from "react-icons/lia";

const MyInfo = () => {
  return(
    <div className="lg:pt-32 mb-10 lg:mb-0">
      <h1 className="text-6xl text-gray-900 font-bold mb-4">Hi, It's Jay!</h1>
      <h2 className="text-3xl text-gray-700 mb-8">Frontend Developer</h2>
      <h4 className="text-xl text-gray-400 mb-3">Get in touch</h4>
      <ul className="text-gray-500 mb-8">
        <li className="flex flex-row gap-x-1 items-center">
          <LiaPhoneSolid/> <span>+66 8 8004 3038</span>
        </li>
        <li className="flex flex-row gap-x-1 items-center">
          <LiaAtSolid/> <span>me@jirayu.in.th</span>
        </li>
        <li className="flex flex-row gap-x-1 items-center">
          <LiaGithub/> <Link to="https://github.com/IronGhost63">https://github.com/IronGhost63</Link>
        </li>
        <li className="flex flex-row gap-x-1 items-center">
          <LiaLinkedinIn/> <Link to="https://www.linkedin.com/in/jirayu-yingthawornsuk">https://www.linkedin.com/in/jirayu-yingthawornsuk</Link>
        </li>
      </ul>
      <Link to="/works" className="inline-block border border-gray-600 hover:border-sky-500 hover:text-sky-500 px-4 py-2">My Works</Link>
    </div>
  );
}

export default MyInfo;
