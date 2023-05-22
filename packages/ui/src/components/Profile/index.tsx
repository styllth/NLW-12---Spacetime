import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type ProfileProps = {
  name: string;
  avatarUrl: string;
};

export const Profile: FunctionComponent<ProfileProps> = ({
  name,
  avatarUrl,
}) => {
  return (
    <div className="ui-flex ui-items-center ui-gap-3 ui-text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="ui-h-10 ui-w-10 ui-rounded-full"
      />

      <p className="ui-max-w-[140px] ui-text-sm ui-leading-snug">
        {name}
        <Link
          href=""
          className="ui-block ui-text-red-400 hover:ui-text-red-300"
        >
          Quero sair
        </Link>
      </p>
    </div>
  );
};
