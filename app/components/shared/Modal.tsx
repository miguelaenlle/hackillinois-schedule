import { FC, ReactNode } from "react";
import { FaXmark } from "react-icons/fa6";
import CategoryIcon from "../DetailedSchedule/CategoryIcon";

// Modified version of https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular

export const Modal: FC<{
  isOpen: boolean,
  onClose: () => void,
  header: string,
  eventType?: string,
  stringLights?: boolean,
  children: ReactNode
}> = (props) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none px-3 ${props.isOpen ? "" : "hidden"} transition-all pt-8`}
        onClick={props.onClose}
      >
        <div className="relative w-full max-w-2xl my-6 mx-auto">
          <div className="border-0 rounded-lg relative flex flex-col w-full bg-zinc-50 outline-none focus:outline-none overflow-hidden" onClick={(e) => { e.stopPropagation() }}>
            {/* {props.stringLights && (
              <div className="w-full flex justify-start -mt-[1px]">
                <StringLights />
              </div>
            )} */}
            <div className={"p-4 pb-8 pt-5"}>
              <div className="w-full flex items-start justify-between gap-7">
                <div className="items-center flex justify-start gap-3">
                  {props.eventType && (
                    <div className="md:mt-0">
                      <CategoryIcon
                        category={props.eventType}
                        dark
                        customWidth={"w-6 md:w-8"}
                        customHeight={"h-6 md:h-8"}
                      />
                    </div>
                  )}
                  <h1 className="text-zinc-900 text-xl md:text-2xl font-bold mt-[1px]">{props.header}</h1>
                </div>
                <FaXmark className="text-zinc-400 hover:text-zinc-800 transition-all hover:cursor-pointer w-7 min-w-7 h-7 mt-[1px] md:mt-0" onClick={props.onClose} />
              </div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
      <div onClick={props.onClose} className={`opacity-50 fixed inset-0 z-40 bg-black ${props.isOpen ? "" : "hidden"} transition-all`}></div>
    </>
  );
}
