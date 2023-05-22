import { FunctionComponent } from "react";

export const EmptyMemories: FunctionComponent = () => (
  <div className="ui-flex ui-flex-1 ui-items-center ui-justify-center">
    <p className="ui-w-[360px] ui-text-center ui-leading-relaxed">
      Você ainda não registrou nenhuma lembrança, começa{" "}
      <a href="" className="ui-underline hover:ui-text-gray-50">
        criar agora
      </a>
      !
    </p>
  </div>
);
