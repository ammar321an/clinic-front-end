import dynamic from "next/dynamic";
import React from "react";

// Dynamically import content components
const EndometriosisContent = dynamic(() => import("./contents/Endometriosis"));
const GynaeCancerContent = dynamic(() => import("./contents/GynaeCancer"));
const InfertilityContent = dynamic(() => import("./contents/Infertility"));
const GynaeSurgeryContent = dynamic(() => import("./contents/GynaeSurgery"));
const PcosContent = dynamic(() => import("./contents/Pcos"));
const RedFlagContent = dynamic(() => import("./contents/RedFlag"));
const MenopauseContent = dynamic(() => import("./contents/Menopause"));

interface ContentComponents {
  [key: string]: React.ComponentType<any>;
}

const contentComponents: ContentComponents = {
  Endometriosis: EndometriosisContent,
  GynaeCancer: GynaeCancerContent,
  Infertility: InfertilityContent,
  GynaeSurgery: GynaeSurgeryContent,
  Pcos: PcosContent,
  RedFlag: RedFlagContent,
  Menopause: MenopauseContent,
};

export const getContentComponent = (componentName: string): React.ComponentType<any> | null => {
  return contentComponents[componentName] || null;
};