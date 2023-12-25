// I want to make this is component as stateful component

import React, { useState } from "react";

const Content = (props) => {
  // const [articles, setArticles] = useState("Hey ye mera article ha");
  return (
    <div>
      <article>{props.article}</article>
    </div>
  );
};

export default Content;

// before 16.8.0 there is no way to handle the state inside the functionaly component thats why
// that time functional component are called stateless component in  16.8.0 react-hooks has been
// introduced with the help of useState hook we can defined state inside functional component
