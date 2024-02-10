import React from "react";
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface Benefit {
  id: number;
  icon: JSX.Element;
  title: string;
  descirption: string;
  link: string;
}
