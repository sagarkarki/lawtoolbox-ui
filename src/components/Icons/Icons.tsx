import React from "react";

export type IconType = "close";
export interface iconDefination {
  [key: string]: React.SVGProps<SVGSVGElement>;
}

export const icons: iconDefination = {
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path
        d="M25.5,9.313,23.687,7.5,16.5,14.687,9.313,7.5,7.5,9.313,14.687,16.5,7.5,23.687,9.313,25.5,16.5,18.313,23.687,25.5,25.5,23.687,18.313,16.5Z"
        transform="translate(-7.5 -7.5)"
      />
    </svg>
  ),
};

export interface LtbIconProps {
  icon: IconType;
}

const LtbIcon = ({ icon }: LtbIconProps) => {
  return <>{icons[icon]}</>;
};
export default LtbIcon;
