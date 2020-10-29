import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <div>
      React Amplify Project
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true});
