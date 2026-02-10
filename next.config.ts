import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default withContentlayer(nextConfig);
