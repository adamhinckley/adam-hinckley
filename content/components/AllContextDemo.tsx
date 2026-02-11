import dynamic from "next/dynamic";
import ContextDemo from "./ContextDemo";
import ZustandShallowDemo from "./ZustandShallowDemo";

const ZustandNotShallow = dynamic(() => import("../components/ZustandNotShallowDemo"), {
  ssr: false,
});

export default function AllContextDemo() {
  return (
    <div className="flex flex-col gap-12">
      <ContextDemo />
      <ZustandNotShallow />
      <ZustandShallowDemo />
    </div>
  );
}
