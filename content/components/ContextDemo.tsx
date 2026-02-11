"use client";
import { createContext, useContext, useState, useRef } from "react";

type DemoContextValue = {
  childCSayHello: boolean;
  setChildCSayHello: React.Dispatch<React.SetStateAction<boolean>>;
  parentCopy: string;
  grandparentCopy: string;
  childBCopy: string;
};

const DemoContext = createContext<DemoContextValue | null>(null);

function useDemoContext() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemoContext must be used inside DemoProvider");
  }
  return context;
}

function DemoProvider({ children }: { children: React.ReactNode }) {
  const [childCSayHello, setChildCSayHello] = useState(false);
  const parentCopy = "Parent";
  const grandparentCopy = "Grandparent";
  const childBCopy = "Child B";

  const value = { childCSayHello, setChildCSayHello, parentCopy, grandparentCopy, childBCopy };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

function Grandparent() {
  const { grandparentCopy } = useDemoContext();
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;

  console.log("ContextGrandparent rendered");
  return (
    <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`grandparent-title-${flashKey}`}
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 text-flash animate-text-flash"
      >
        {grandparentCopy}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 pb-2 text-flash animate-text-flash">
        This component and all children re-render when the context state updates, even if they don't
        access the updated value.{" "}
      </p>
      <Parent />
    </div>
  );
}

function Parent() {
  const { parentCopy } = useDemoContext();
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;

  console.log("Context Parent rendered");

  return (
    <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`parent-title-${flashKey}`}
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 text-flash animate-text-flash"
      >
        {parentCopy}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 pb-2">
        This component and all subscribed children re-render when the context state updates, even if
        they don't access the updated value.{" "}
      </p>
      <div className="flex flex-col gap-2">
        <DemoChildA label="Child A" />
        <DemoChildB />
        <DemoChildC label="Child C" />
      </div>
    </div>
  );
}

function DemoChildA({ label }: { label: string }) {
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;
  console.log("Context Child A Rendered");
  console.log("flashKey", flashKey);
  return (
    <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`childa-title-${flashKey}`}
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 animate-text-flash"
      >
        {label}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 ">
        This child doesn't subscribe to the shared context and still re-renders when the context
        state updates because it's a child of the provider.
      </p>
    </div>
  );
}

function DemoChildB() {
  const { childBCopy } = useDemoContext();
  // Increment a per-instance counter so we can force a remount on each render.
  const renderCount = useRef(0);
  renderCount.current += 1;
  // Changing this key restarts the CSS animation without state or effects.
  const flashKey = renderCount.current;
  console.log("ContextChild B Rendered");
  return (
    <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`childb-title-${flashKey}`}
        // The key remounts the node each render so the animation replays.
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 text-flash animate-text-flash"
      >
        {childBCopy}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        This child accesses state from context, but not the variable in Child C, but it will still
        re-render when the state updates because it's a child of the provider.
      </p>
    </div>
  );
}

function DemoChildC({ label }: { label: string }) {
  const { setChildCSayHello, childCSayHello } = useDemoContext();
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;
  console.log("ContextChild C Rendered", childCSayHello);

  const handleClick = () => {
    setChildCSayHello((prev) => !prev);
  };

  return (
    <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`childc-title-${flashKey}`}
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 text-flash animate-text-flash"
      >
        {label}
      </p>
      <div className="w-full flex justify-center">
        <button
          className="cursor-pointer rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          onClick={handleClick}
        >
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default function ContextDemo() {
  return (
    <DemoProvider>
      <section className="flex flex-col gap-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-zinc-50 dark:bg-black p-6">
        <header className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-black dark:text-white">Context Demo</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Click "Say Hello" to update the context state. Notice how every component except for{" "}
            <strong>Child A</strong> flashes because of re-renders, even if they don't access the
            updated value. Check the console to see the updates logged for every component.
          </p>
        </header>

        <div className="grid gap-4">
          <Grandparent />
        </div>
      </section>
    </DemoProvider>
  );
}
