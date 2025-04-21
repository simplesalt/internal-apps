import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default function CatchallPage() {
  return <PlasmicComponent component="YourRootComponent" />;
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { catchall: [] } }, // Homepage
      { params: { catchall: ["about"] } }, // /about
      // Add other known paths here
    ],
    fallback: false, // Disable dynamic paths
  };
};

// Critical: Disable ISR/SSG for Cloudflare Pages + static export
export const getStaticProps = async () => {
  return { props: {} }; // Plain static props
};
