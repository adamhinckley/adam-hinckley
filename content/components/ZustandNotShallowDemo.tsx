"use client";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface DemoState {
  childCSayHello: boolean;
  toggleChildCSayHello: () => void;
  grandparentCopy: string;
  parentCopy: string;
  childBCopy: string;
}

const useDemoStore = create<DemoState>((set) => ({
  childCSayHello: false,
  toggleChildCSayHello: () => set((state) => ({ childCSayHello: !state.childCSayHello })),
  grandparentCopy: "Grandparent",
  parentCopy: "Parent",
  childBCopy: "Child B",
}));

function Grandparent() {
  const { grandparentCopy } = useDemoStore();
  console.log("Grandparent rendered");
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{grandparentCopy}</p>
      <Parent />
    </div>
  );
}

function Parent() {
  const { parentCopy } = useDemoStore((state) => ({ parentCopy: state.parentCopy }));
  console.log("Parent rendered");
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
      <p className="font-bold text-md text-zinc-500 dark:text-zinc-400">{parentCopy}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 pb-2">
        This component and all children re-render when the context state updates, even if they don't
        access the updated value.{" "}
      </p>
      <div className="flex flex-col gap-2">
        <DemoChildA label="Child A" />
        <DemoChildB label="Child B" />
        <DemoChildC label="Child C" />
      </div>
    </div>
  );
}

function DemoChildA({ label }: { label: string }) {
  return (
    <div className=" rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
      <p className="font-bold text-md text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        This child doesn't subscribe to the shared state and won't re-render when the state updates.
      </p>
    </div>
  );
}

function DemoChildB({ label }: { label: string }) {
  const { childBCopy, parentCopy } = useDemoStore(
    useShallow((state) => ({ childBCopy: state.childBCopy, parentCopy: state.parentCopy })),
  );
  console.log("Child B Rendered");

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
      <p className="font-bold text-md text-zinc-500 dark:text-zinc-400">{childBCopy}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        This child accesses state from context, but not the varialbe in Child C, bit it will still
        re-render when the state updates because it's a child of the provider.
      </p>
    </div>
  );
}

function DemoChildC({ label }: { label: string }) {
  const toggleChildCSayHello = useDemoStore((state) => state.toggleChildCSayHello);
  const childSaysHello = useDemoStore((state) => state.childCSayHello);
  console.log("Child C Says Hello:", childSaysHello);

  const handleClick = () => {
    toggleChildCSayHello();
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
      <p className="font-bold text-md text-zinc-500 dark:text-zinc-400">{label}</p>
      <div className="w-full flex justify-center">
        <button
          className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          onClick={handleClick}
        >
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default function ZustandDemo() {
  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black p-6">
      <header className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-black dark:text-white">Zustand Update Demo</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Click the button to update the shared state. Each child subscribes to Zustand and
          re-renders on change. Check the console to see the updates logged for every child.
        </p>
      </header>

      <div className="grid gap-4">
        <Grandparent />
      </div>
    </section>
  );
}
