import { FunctionComponent } from "react";

export const Copyright: FunctionComponent = () => (
  <div className="ui-text-sm ui-leading-relaxed ui-text-gray-200">
    Feito com 💜 no NLW da{" "}
    <a
      target="_blank"
      rel="noreferrer"
      className="ui-underline hover:ui-text-gray-100"
      href="https://rocketseat.com.br"
    >
      Rocketseat
    </a>
  </div>
);
