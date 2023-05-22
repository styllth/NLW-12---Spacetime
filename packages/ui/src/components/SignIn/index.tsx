import { User } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

export const SignIn: FunctionComponent = () => {
  return (
    <Link
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="ui-flex ui-items-center ui-gap-3 ui-text-left ui-transition-colors hover:ui-text-gray-50"
    >
      <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-full ui-bg-gray-400">
        <User className="ui-h-5 ui-w-5 ui-text-gray-500" />
      </div>

      <p className="ui-max-w-[140px] ui-text-sm ui-leading-snug">
        <span className="ui-underline">Crie sua conta</span> e salve suas
        memórias
      </p>
    </Link>
  );
};
