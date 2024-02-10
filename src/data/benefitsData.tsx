import { Benefit } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const beenfitsData: Benefit[] = [
  {
    id: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    descirption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit quia autem consequuntur labore error inventore neque voluptas asperiores placeat minus consectetur, sunt quos? Molestias.",
    link: "Learn More",
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    descirption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit quia autem consequuntur labore error inventore neque voluptas asperiores placeat minus consectetur, sunt quos? Molestias.",
    link: "Learn More",
  },
  {
    id: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    descirption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit quia autem consequuntur labore error inventore neque voluptas asperiores placeat minus consectetur, sunt quos? Molestias.",
    link: "Learn More",
  },
];
export default beenfitsData;
