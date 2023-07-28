import React, { FC } from "react";

interface ContentPropInterface {
  content: {
    image: any;
    title1: string;
    title2: string;
    description: string;
  };
}

const Index: FC<ContentPropInterface> = ({ content }) => {
  return (
    <div className="col-lg-4">
      <div className="content-block-wrapper">
        <img src={content.image} alt="content-img" />
        <div className="info-content">
          <h2>
            {content.title1}
            <br />
            {content.title2}
          </h2>
          <p>{content.description}</p>
        </div>

        <a className="btn access-btn theme-btn" href={undefined}>
          ACCESS
        </a>
      </div>
    </div>
  );
};

export default Index;
