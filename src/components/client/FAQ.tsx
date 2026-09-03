import * as React from "react";
import { Accordion } from "@base-ui/react/accordion";
import type { FAQProps } from "@/lib/types";

export default function FAQ({ items }: { items: FAQProps[] }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2>Frequently Asked Questions</h2>

        <span className="block mt-4 w-20 h-1 bg-primary"></span>

        <Accordion.Root className="flex w-full flex-col text-neutral-950 mt-6">
          {items.map((item, i) => (
            <Accordion.Item
              key={item.question}
              className={i > 0 ? "border-t border-neutral-950" : ""}
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 text-primary px-3 py-2 text-left text-sm font-normal select-none hover:not-data-disabled:bg-light-accent focus-visible:relative focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-neutral-950">
                  {item.question}
                  <PlusIcon className="shrink-0 transition-transform duration-100 ease-[ease-out] group-data-panel-open:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="h-[--accordion-panel-height] overflow-hidden text-sm transition-[height] duration-150 ease-[ease-out] data-ending-style:h-0 data-starting-style:h-0">
                <div className="px-3 py-2 max-w-prose">{item.answer}</div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M1.5 8h13M8 14.5v-13" />
    </svg>
  );
}
