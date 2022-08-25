import React from "react";
import Welcome from "./emails/Welcome";
import { render } from "mailing-core";

function renderTemplate(Template, props) {
  return render(React.createElement(Template, props)).html;
}

export function renderWelcome({ name }) {
  return renderTemplate(Welcome, { name });
}
