import { useStore } from "effector-react";
import { $history } from "@/store/store";
import { getDescription } from "@/shared/values-description";
import { copyBlobToClipboard } from "copy-image-clipboard";
import { useEffect, useState } from "react";
import CopyIcon from "./images/copy.inline.svg";
import { clsx } from "clsx";
function CopyCard() {
  const history = useStore($history);
  const currentRoll = history[history.length - 1];

  const [card, setCard] = useState<any>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  const url = new URLSearchParams();

  if (currentRoll && currentRoll.value.length !== 0) {
    url.append("dice", JSON.stringify(currentRoll.value));
    url.append("mod", JSON.stringify(currentRoll.modifier));

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      url.append("theme", JSON.stringify("dark"));
    } else {
      url.append("theme", JSON.stringify("light"));
    }
    url.append("result", JSON.stringify(currentRoll.result));
    url.append(
      "description",
      JSON.stringify(getDescription(currentRoll.value, currentRoll.modifier))
    );
  }

  useEffect(() => {
    fetch(`/api/og/?${url}`)
      .then((res) => res.blob())
      .then((blob) => setCard(blob));
  }, [currentRoll, url]);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 2000);
    }
  }, [currentRoll, clicked]);

  return (
    <div>
      <button
        className={clsx(
          clicked ? "right-[-50px]" : "right-0",
          "copy-card absolute top-0 z-10 flex flex-row p-2"
        )}
        type="button"
        onClick={() => {
          setClicked(true);
          copyBlobToClipboard(card);
        }}
      >
        <CopyIcon width={48} height={48} />
        {clicked && (
          <span className="text-base font-bold uppercase leading-6">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}

export { CopyCard };
