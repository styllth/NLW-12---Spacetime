import Image from "next/image";
import Link from "next/link";

import { FunctionComponent } from "react";

type HeroProps = {
  logo: string;
};

export const Hero: FunctionComponent<HeroProps> = ({ logo }) => {
  return (
    <div className="ui-space-y-5">
      <Image src={logo} alt="NLW Spacetime" />

      <div className="ui-max-w-[420px] ui-space-y-1">
        <h1 className="ui-text-5xl ui-font-bold ui-leading-tight ui-text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="ui-text-lg ui-leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        className="ui-inline-block ui-rounded-full ui-bg-green-500 ui-px-5 ui-py-3 ui-font-alt ui-text-sm ui-uppercase ui-leading-none ui-text-black hover:ui-bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  );
};
