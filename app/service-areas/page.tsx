import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Frontenac Roofing serves communities across the greater St. Louis metro — Missouri and Illinois. Find your city and confirm your project location.",
};

// Service areas align with Cornerstone Construction (sister company) coverage.
// Missouri counties: St. Louis, St. Charles, Jefferson, Franklin, Lincoln, Warren
// Illinois counties: St. Clair, Madison, Monroe

const MISSOURI_COUNTIES = [
  {
    name: "St. Louis County",
    cities: "St. Louis, Kirkwood, Chesterfield, Ballwin, Florissant, Webster Groves, Clayton, Creve Coeur, Maryland Heights, Hazelwood, University City, Overland, Bridgeton, Manchester, Ladue, Town and Country, Des Peres, Wildwood, Ellisville, Fenton, Oakville, Mehlville, Affton, Crestwood, Sunset Hills, Brentwood, Richmond Heights, Maplewood, Ferguson"
  },
  {
    name: "St. Charles County",
    cities: "St. Charles, O'Fallon, St. Peters, Wentzville, Lake Saint Louis, Cottleville, Dardenne Prairie, Weldon Spring, St. Paul, Augusta, New Melle, Portage Des Sioux"
  },
  {
    name: "Jefferson County",
    cities: "Arnold, Festus, Imperial, Hillsboro, De Soto, Crystal City, Herculaneum, Pevely, High Ridge, House Springs, Cedar Hill, Barnhart"
  },
  {
    name: "Franklin County",
    cities: "Washington, Union, Pacific, Sullivan, St. Clair, New Haven, Villa Ridge, Gerald"
  },
  {
    name: "Lincoln County",
    cities: "Troy, Moscow Mills, Elsberry, Winfield, Hawk Point, Foley"
  },
  {
    name: "Warren County",
    cities: "Warrenton, Wright City, Marthasville, Truesdale"
  }
];

const ILLINOIS_COUNTIES = [
  {
    name: "St. Clair County",
    cities: "Belleville, O'Fallon, Fairview Heights, Swansea, Shiloh, Mascoutah, Millstadt, Cahokia Heights"
  },
  {
    name: "Madison County",
    cities: "Edwardsville, Alton, Granite City, Collinsville, Troy, Glen Carbon, Highland, Wood River, Bethalto, Maryville"
  },
  {
    name: "Monroe County",
    cities: "Columbia, Waterloo, Valmeyer"
  }
];

export default function ServiceAreasPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service Areas"
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
        title={<>Serving the Greater St. Louis Metro</>}
        lead="Frontenac Roofing serves commercial and residential properties across Missouri and Illinois. Whether it's a single roof repair or a multi-building restoration, we bring the same standard to every job site listed below."
        image={{ ratio: "4-3", label: "Greater St. Louis service area map", src: "/images/service-areas.webp" }}
      />

      <section className="section section--compact surface-white" aria-labelledby="missouri-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label eyebrow--brass">Missouri</span>
            <h2 id="missouri-title" className="t-display-md">Missouri Service Areas</h2>
          </header>
          <div className={`${s.cards} ${s["cards--2"]}`}>
            {MISSOURI_COUNTIES.map((county) => (
              <div key={county.name} className={s.card}>
                <h3 className="t-title-md">{county.name}</h3>
                <p className="t-body-sm" style={{ color: "var(--muted)" }}>{county.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compact surface-light" aria-labelledby="illinois-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label eyebrow--brass">Illinois</span>
            <h2 id="illinois-title" className="t-display-md">Illinois Service Areas</h2>
          </header>
          <div className={`${s.cards} ${s["cards--2"]}`}>
            {ILLINOIS_COUNTIES.map((county) => (
              <div key={county.name} className={s.card}>
                <h3 className="t-title-md">{county.name}</h3>
                <p className="t-body-sm" style={{ color: "var(--muted)" }}>{county.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compact surface-white">
        <div className="container container--editorial" style={{ maxWidth: "66ch" }}>
          <h2 className="t-title-lg">Don't see your town listed?</h2>
          <p className="t-body">Our service area is always growing. If you're in or near the greater St. Louis region, there's a good chance we can help. Give us a call or request a free inspection — we'll let you know right away.</p>
        </div>
      </section>

      <CTABand headline="Not sure if you're in our area?" body="Tell us your project location and we'll confirm coverage." />
    </PageShell>
  );
}
