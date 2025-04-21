import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

export default function CatchallPage() {
  return <PlasmicComponent component="YourRootComponent" />;
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { catchall: [] } }],
    fallback: false,
  };
};

// Critical: Disable ISR/SSG for Cloudflare Pages + static export
export const getStaticProps = async () => {
  return { props: {} }; // Plain static props
};
