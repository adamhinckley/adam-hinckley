import type { ComponentType } from "react";
import * as runtime from "react/jsx-runtime";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

type MDXProps = {
  code: string;
  components?: Record<string, ComponentType>;
};

export default function MDXContent({ code, components }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
