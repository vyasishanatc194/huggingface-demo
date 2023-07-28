import React, { FC } from "react";

import ContentCard from "../../Core/ContentCard";


import hand_with_stack_icon from "../../../Assets/Images/HandwithStackIcon.svg";
import leader_board from "../../../Assets/Images/leader-board.svg";
import app_showcase from "../../../Assets/Images/app-showcase.svg";
import case_notebook from "../../../Assets/Images/case-notebook.svg";
import education from "../../../Assets/Images/education.svg";
import case_study from "../../../Assets/Images/case-study.svg";
import safety_system from "../../../Assets/Images/safety-system.svg";
import rai_tools from "../../../Assets/Images/rai-tools.svg";
import member_directory from "../../../Assets/Images/member-directory.svg";
import member_showcase from "../../../Assets/Images/member-showcase.svg";

const Index: FC = () => {
  return (
    <div className="page-wrapper">
      <div className="main-wrapper">
        <div className="page-title">
          <img src={hand_with_stack_icon} alt="title-img" />
          <h1>
            Welcome to Responsible Generative AI Testbed <sup>Beta</sup>
          </h1>
        </div>

        <div className="page-content">
          <div className="row">
            <ContentCard
              content={{
                image: leader_board,
                title1: "GenAI Safety",
                title2: "Leaderboard",
                description: "RAI Institute Foundation Model Safety leaderboard based on compliance to regulations.",
              }}
            />
            <ContentCard
              content={{
                image: app_showcase,
                title1: "App",
                title2: "Showcase",
                description: "Live guides showcasing practical responsible GenAI applications in diverse industry scenarios.",
              }}
            />
            <ContentCard
              content={{
                image: case_notebook,
                title1: "GenAI Safety",
                title2: "Leaderboard",
                description: "Company level GenAI Safety ratings and assessment with views into exposure, compliance, and resiliency.",
              }}
            />
            <ContentCard
              content={{
                image: education,
                title1: "GenAI Safety",
                title2: "Leaderboard",
                description: "Collection of educational resources for responsible application and understanding of GenAI.",
              }}
            />
            <ContentCard
              content={{
                image: case_study,
                title1: "GenAI Safety",
                title2: "Leaderboard",
                description: "Real-world applications and outcomes of responsible GenAI demonstrated through case studies.",
              }}
            />
            <ContentCard
              content={{
                image: safety_system,
                title1: "GenAI Safety",
                title2: "Leaderboard",
                description: "Community-driven tools and expertise hub for improving GenAI safety via open-source.",
              }}
            />
            <ContentCard
              content={{
                image: rai_tools,
                title1: "GenAI Safety",
                title2: "Leaderboard",
                description: "Collection of educational resources for responsible application and understanding of GenAI.",
              }}
            />
            <ContentCard
              content={{
                image: member_directory,
                title1: "GenAI Safety",
                title2: "Leaderboard",
                description: "Real-world applications and outcomes of responsible GenAI demonstrated through case studies.",
              }}
            />
            <ContentCard
              content={{
                image: member_showcase,
                title1: "GenAI Safety",
                title2: "Leaderboard",
                description: "Community-driven tools and expertise hub for improving GenAI safety via open-source.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
