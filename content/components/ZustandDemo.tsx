"use client";
import { useState, useRef } from "react";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface DemoState {
  childCSayHello: boolean;
  toggleChildCSayHello: () => void;
  grandparentCopy: string;
  parentCopy: string;
  childBCopy: string;
  childCCopy: string;
}

const useDemoStore = create<DemoState>((set) => ({
  childCSayHello: false,
  toggleChildCSayHello: () => set((state) => ({ childCSayHello: !state.childCSayHello })),
  grandparentCopy: "Grandparent",
  parentCopy: "Parent",
  childBCopy: "Child B",
  childCCopy: "Child C",
}));

function Grandparent() {
  const grandparentCopy = useDemoStore((state) => state.grandparentCopy);
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;

  return (
    <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`grandparent-title-${flashKey}`}
        className="text-sm text-zinc-500 dark:text-zinc-400 pb-2"
      >
        {grandparentCopy}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 pb-2">
        This component subscribes to the shared store, but doesn't access the same value as Child C,
        so it won't re-render when Child C updates the state.
      </p>
      <Parent />
    </div>
  );
}

function Parent() {
  const parentCopy = useDemoStore((state) => state.parentCopy);
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;
  console.log("Zustand Parent rendered");
  return (
    <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`parent-title-${flashKey}`}
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 text-flash animate-text-flash"
      >
        {parentCopy}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 pb-2">
        This child subscribes to the shared store, but doesn't access the same value as Child C, so
        it won't re-render when Child C updates the state.
      </p>
      <div className="flex flex-col gap-2">
        <DemoChildA />
        <DemoChildB />
        <DemoChildC />
      </div>
    </div>
  );
}

function DemoChildA() {
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;
  console.log("Zustand Child A Rendered");
  return (
    <div className=" rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`childa-title-${flashKey}`}
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 text-flash animate-text-flash"
      >
        Child A
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        This child doesn't subscribe to the shared state and won't re-render when the state updates.
      </p>
    </div>
  );
}

function DemoChildB() {
  const childBCopy = useDemoStore((state) => state.childBCopy);
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;
  console.log("Zustand Child B Rendered");

  return (
    <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`childb-title-${flashKey}`}
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 text-flash animate-text-flash"
      >
        {childBCopy}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        This child subscribes to the shared store, but doesn't access the same value as Child C, so
        it won't re-render when Child C updates the state.
      </p>
    </div>
  );
}

function DemoChildC() {
  const { toggleChildCSayHello, childSaysHello, childCCopy } = useDemoStore(
    useShallow((state) => ({
      toggleChildCSayHello: state.toggleChildCSayHello,
      childSaysHello: state.childCSayHello,
      childCCopy: state.childCCopy,
    })),
  );
  const renderCount = useRef(0);
  renderCount.current += 1;
  const flashKey = renderCount.current;

  console.log("Zustand Child C Says Hello:", childSaysHello);

  const handleClick = () => {
    toggleChildCSayHello();
  };

  return (
    <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-zinc-950 p-4">
      <p
        key={`childc-title-${flashKey}`}
        className="font-bold text-md text-zinc-500 dark:text-zinc-400 text-flash animate-text-flash"
      >
        {childCCopy}
      </p>
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
    <section className="flex flex-col gap-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-zinc-50 dark:bg-black p-6">
      <header className="flex flex-col gap-2">
        <span className="flex items-center gap-4">
          <h3 className="text-xl font-semibold text-black dark:text-white">Zustand Demo</h3>
          <a
            href="https://github.com/adamhinckley/adam-hinckley/blob/main/content/components/ZustandDemo.tsx"
            target="_blank"
            className="text-sm text-blue-600 dark:text-blue-400 mt-4"
          >
            view source code
          </a>
        </span>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Click the button to update the shared state. Each child subscribes to Zustand, but only
          Child C accesses the updated value, so only Child C re-renders when the button is clicked.
        </p>
      </header>

      <div className="grid gap-4">
        <Grandparent />
      </div>
    </section>
  );
}
