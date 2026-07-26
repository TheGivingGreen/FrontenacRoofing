export type ProjectRatio = "3-2" | "4-3" | "4-5";

export type RecoveredProject = {
  id: string;
  category: string;
  location: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  ratio: ProjectRatio;
  homeSpan: "pg1" | "pg2" | "pg3" | "pg4";
  position?: string;
};

/**
 * Project photography and accompanying facts recovered from Frontenac's
 * published legacy portfolio on July 26, 2026.
 */
export const recoveredProjects: RecoveredProject[] = [
  {
    id: "cherry-valley-hotel-roof-replacement",
    category: "Commercial Roofing",
    location: "Newark, OH",
    title: "Cherry Valley Hotel Roof Replacement",
    description:
      "Frontenac completed a commercial roof replacement for Cherry Valley Hotel, a two-story property with 200 rooms and suites.",
    image: "/images/project-01.webp",
    alt: "Aerial view of the Cherry Valley Hotel roofing project in Newark, Ohio",
    ratio: "3-2",
    homeSpan: "pg1",
  },
  {
    id: "lake-st-louis-residential-roof-replacement",
    category: "Residential Roofing",
    location: "Lake St. Louis, MO",
    title: "Lake St. Louis Residential Roof Replacement",
    description:
      "Frontenac replaced this approximately 8,972-square-foot residential roof with Camelot shingles.",
    image: "/images/project-02.webp",
    alt: "Aerial view of a large residential roof replacement in Lake St. Louis, Missouri",
    ratio: "4-5",
    homeSpan: "pg2",
    position: "center",
  },
  {
    id: "eureka-residential-roof-replacement",
    category: "Residential Roofing",
    location: "Eureka, MO",
    title: "Eureka Residential Roof Replacement",
    description:
      "Frontenac replaced the roof on this approximately 4,553-square-foot, one-story home with architectural shingles.",
    image: "/images/project-03.webp",
    alt: "Residential roof replacement underway in Eureka, Missouri",
    ratio: "4-3",
    homeSpan: "pg3",
  },
  {
    id: "cherry-valley-hotel-tpo-replacement",
    category: "TPO Roofing",
    location: "Newark, OH",
    title: "Cherry Valley Hotel TPO Replacement",
    description:
      "Frontenac replaced the TPO roofing system on a two-story hotel with 200 rooms and suites in Newark, Ohio.",
    image: "/images/project-04.webp",
    alt: "Crew installing a TPO roofing membrane on the Cherry Valley Hotel project",
    ratio: "3-2",
    homeSpan: "pg4",
  },
];

export const featuredProject = recoveredProjects[1];
