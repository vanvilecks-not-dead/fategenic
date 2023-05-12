import { getDescription } from "@/shared/values-description";
import { $history } from "@/store/store";
import { useStore } from "effector-react";

const History = () => {
  const history = useStore($history);
  const reverseHistory = history.slice(1).reverse();
  return (
    <div className="pl-10 pt-5">
      <span className="text-xl font-bold uppercase leading-9 text-deep-green">
        Roll history
      </span>
      <ul className="h-[40vh] overflow-y-scroll">
        {reverseHistory.map((item, index, arr) => {
          return (
            <li key={item.modifier + item.result + index}>
              {item.result + item.modifier}{" "}
              <span className="uppercase">
                [{getDescription(item.value, item.modifier)}]
              </span>{" "}
              <span>mod. to {item.modifier}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { History };
