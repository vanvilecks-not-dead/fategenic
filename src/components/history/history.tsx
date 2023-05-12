import { getDescription } from "@/shared/values-description";
import { $history } from "@/store/store";
import { useStore } from "effector-react";
const History = () => {
  const history = useStore($history);
  const reverseHistory = history.slice(1).reverse();
  return (
    <div className="w-full pt-5">
      <div className="mb-4 text-center text-xl font-bold uppercase leading-9 text-deep-green md:text-start">
        Roll history
      </div>
      <ul className="mx-auto h-[40vh] overflow-y-scroll scrollbar-hide lg:text-start">
        {reverseHistory.map((item, index) => {
          return (
            <li
              key={index}
              className="mb-4 block font-normal leading-9 text-deep-green"
            >
              <span>
                {item.result + item.modifier > 0 && "+"}
                {item.result + item.modifier}{" "}
              </span>
              <span className="uppercase">
                [{getDescription(item.value, item.modifier)}]
              </span>{" "}
              <span>
                {item.modifier !== 0 && <span>mod.to {item.modifier}</span>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { History };
