"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";

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

  useEffect(() => {
    console.log("Context state updated:", childCSayHello);
  }, [childCSayHello]);

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

function Grandparent() {
  const { grandparentCopy } = useDemoContext();
  console.log("Grandparent rendered");
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
      <p className="font-bold text-md text-zinc-500 dark:text-zinc-400">{grandparentCopy}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        This component and all children re-render when the context state updates, even if they don't
        access the updated value.{" "}
      </p>
      <Parent />
    </div>
  );
}

function Parent() {
  const { parentCopy } = useDemoContext();
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
  const { childBCopy } = useDemoContext();
  const elemtRef = useRef<HTMLDivElement>(null);
  console.log("child BBBBB");

  elemtRef.current && console.log("Child B Rendered yo!", elemtRef.current);

  if (elemtRef.current) {
    elemtRef.current.classList.add("animate-flash");
    setTimeout(() => {
      elemtRef.current && elemtRef.current.classList.remove("animate-flash");
    }, 500);
  }

  return (
    <div
      ref={elemtRef}
      className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4"
    >
      <p className="font-bold text-md text-zinc-500 dark:text-zinc-400">{childBCopy}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        This child accesses state from context, but not the varialbe in Child C, bit it will still
        re-render when the state updates because it's a child of the provider.
      </p>
    </div>
  );
}

function DemoChildC({ label }: { label: string }) {
  const { setChildCSayHello, childCSayHello } = useDemoContext();
  console.log("Child C Rendered", childCSayHello);

  const handleClick = () => {
    setChildCSayHello((prev) => !prev);
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
      <p className="font-bold text-md text-zinc-500 dark:text-zinc-400">{label}</p>
      <div className="w-full flex justify-center">
        <button
          className="cursor:pointer rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
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
      <section className="flex flex-col gap-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black p-6">
        <header className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-black dark:text-white">Context Update</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Click the button to update the shared state. Each child subscribes to context and
            re-renders on change. Check the console to see the updates logged for every child.
          </p>
        </header>

        <div className="grid gap-4">
          <Grandparent />
        </div>
      </section>
    </DemoProvider>
  );
}
