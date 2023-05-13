import { getDescription } from "@/shared/values-description";
import { $history } from "@/store/store";
import clsx from "clsx";
import { useStore } from "effector-react";
const History = () => {
  const history = useStore($history);
  const reverseHistory = history.slice().reverse();

  return (
    <div className="w-full pt-5">
      <div className="mb-4 text-center text-xl font-bold uppercase leading-9 text-deep-green dark:text-dark-deep-green lg:text-start">
        Roll history
      </div>
      <ul className=" h-[20vh] overflow-y-scroll text-center scrollbar-hide md:h-[40vh] lg:text-start">
        {reverseHistory.map((item, index) => {
          return (
            <li
              key={index}
              className="mb-4 block font-normal leading-9 text-deep-green dark:text-dark-deep-green"
            >
              <span
                className={clsx(item.result + item.modifier == 0 && "pl-1")}
              >
                {item.result > 0 && "+"}
                {item.result}{" "}
              </span>
              <span className="uppercase">
                [{getDescription(item.value, 0)}]
              </span>{" "}
              <span>
                {item.modifier !== 0 && (
                  <>
                    <span>
                      mod.to {item.result + item.modifier > 0 && "+"}
                      {item.modifier + item.result}
                    </span>{" "}
                    <span className="uppercase">
                      [{getDescription(item.value, item.modifier)}]
                    </span>
                  </>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { History };
