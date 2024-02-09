import React from "react";
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export type Benefit = {
  id: number;
  icon: any;
  title: React.ReactNode;
  descirption: string;
  link: string;
};
