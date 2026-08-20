import { Drawer } from "@base-ui/react/drawer";
import { Menu, X } from "lucide-react";
import Navigation from "@/components/shared/Navigation";

export default function MobileMenu() {
  return (
    <div className="block lg:hidden relative">
      <Drawer.Root swipeDirection="right">
        <Drawer.Trigger className="text-main-text flex h-8 items-center justify-center border border-transparent px-3 select-none hover:not-data-disabled:bg-neutral-100  hover:not-data-disabled:border-main-text active:not-data-disabled:bg-neutral-200 data-disabled:border-neutral-500 data-disabled:text-neutral-500 disabled:border-neutral-500 disabled:text-neutral-500 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950 ">
          <span className="sr-only">Open Mobile Menu</span>
          <Menu />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop className="[--backdrop-opacity:0.2] [--bleed:3rem] dark:[--backdrop-opacity:0.7] fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:duration-0 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:absolute z-999" />
          <Drawer.Viewport className="z-999 [--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem] fixed inset-0 flex items-stretch justify-end p-(--viewport-padding)">
            <Drawer.Popup className="[--bleed:3rem] supports-[-webkit-touch-callout:none]:[--bleed:0px] h-full w-92 max-w-[calc(100vw-3rem+3rem)] -mr-12 border-l border-neutral-950 bg-black p-6 pr-18 text-neutral-950 outline-none shadow-[0.25rem_0.25rem_0] shadow-black/12 overflow-y-auto overscroll-contain touch-auto transform-[translateX(var(--drawer-swipe-movement-x))] transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:select-none data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-3rem)] supports-[-webkit-touch-callout:none]:border supports-[-webkit-touch-callout:none]:pr-6">
              <Drawer.Content className="mx-auto w-full max-w-[32rem] text-white h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <Drawer.Title className="mb-1 text-base font-bold font-sora">
                    Menu
                  </Drawer.Title>

                  <div className="flex justify-end gap-3">
                    <Drawer.Close className="flex h-8 items-center justify-center border border-transparent bg-white px-3 text-neutral-950 select-none hover:not-data-disabled:bg-neutral-100 active:not-data-disabled:bg-neutral-200 data-disabled:border-neutral-500 data-disabled:text-neutral-500 disabled:border-neutral-500 disabled:text-neutral-500 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950">
                      <X /> <span className="sr-only">Close Menu</span>
                    </Drawer.Close>
                  </div>
                </div>

                <Drawer.Description
                  className="mb-6 "
                  render={
                    <Navigation
                      ariaLabel="Mobile Menu"
                      navClass="text-sm text-white grow pt-12"
                      ulClass="flex flex-col gap-4 text-2xl uppercase font-sora font-bold"
                      activeClass="mobile-active"
                    />
                  }
                />
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
