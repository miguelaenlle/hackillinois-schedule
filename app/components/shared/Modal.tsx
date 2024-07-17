import { FC, ReactNode } from "react";
import { FaXmark } from "react-icons/fa6";
import CategoryIcon from "../DetailedSchedule/CategoryIcon";

// Modified version of https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular

export const Modal: FC<{
  isOpen: boolean,
  onClose: () => void,
  header: string,
  eventType?: string,
  children: ReactNode
}> = (props) => {
  return (
    <>
      <div
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 ${props.isOpen ? "" : "hidden"} transition-all`}
        onClick={props.onClose}
      >
        <div className="relative w-full max-w-2xl my-6 mx-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-50 outline-none focus:outline-none p-4" onClick={(e) => { e.stopPropagation() }}>
            <div className="w-full flex items-center justify-between">
              <div className="items-center flex justify-start gap-2">
                {props.eventType && (
                  <CategoryIcon
                    category={props.eventType}
                    dark
                  />
                )}
                <p className="text-zinc-900 text-xl font-bold mt-[1px]">{props.header}</p>
              </div>
              <FaXmark className="text-zinc-400 hover:text-zinc-800 transition-all hover:cursor-pointer w-5 h-5" onClick={props.onClose} />
            </div>
            {props.children}
          </div>
        </div>
      </div>
      <div onClick={props.onClose} className={`opacity-50 fixed inset-0 z-40 bg-black ${props.isOpen ? "" : "hidden"} transition-all`}></div>
    </>
  );
}
