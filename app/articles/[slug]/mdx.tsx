"use client";

import { useMDXComponent } from "next-contentlayer/hooks";

type MDXProps = { code: string };

export default function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component />;
}
