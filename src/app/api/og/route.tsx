import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
export const runtime = "experimental-edge";

const Mplus1RegularFontP = fetch(
  new URL("public/fonts/MPLUS1p-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const Mplus1RegularFontBoldP = fetch(
  new URL("public/fonts/MPLUS1p-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  const [Mplus1RegularFont, Mplus1RegularFontBold] = await Promise.all([
    Mplus1RegularFontP,
    Mplus1RegularFontBoldP,
  ]);

  const url = new URL(request.url);

  const dice = JSON.parse(url.searchParams.get("dice")!) as number[];
  const mod = url.searchParams.get("mod");
  const theme = JSON.parse(url.searchParams.get("theme")!) as string;
  const result = JSON.parse(url.searchParams.get("result")!) as string;
  const description = JSON.parse(
    url.searchParams.get("description")!
  ) as string;

  const backgroundColor = theme === "dark" ? "#2E2C31" : "#F2F3FF";

  const getTextColor = () => {
    if (theme === "dark") {
      if (Number(mod) + Number(result) < 0) {
        return "#A54D4D";
      } else if (Number(mod) + Number(result) === 0) {
        return "#C0DDE3";
      } else {
        return "#3AD2B7";
      }
    } else {
      if (Number(mod) + Number(result) < 0) {
        return "#5A0F0F";
      } else if (Number(mod) + Number(result) === 0) {
        return "#062B33";
      } else {
        return "#139C9C";
      }
    }
  };
  const getMarkColor = () => {
    return theme === "dark" ? "#C0DDE3" : "#F2F3FF";
  };
  const renderSide = (value: number) => {
    if (value === 0) {
      return (
        <svg
          style={{
            borderRadius: 10,
          }}
          height="80"
          width="80"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="300" height="300" rx="20" fill="#2DB0CD" />
        </svg>
      );
    } else if (value === 1) {
      return (
        <svg
          style={{
            borderRadius: 10,
          }}
          viewBox="0 0 300 300"
          fill="none"
          height="80"
          width="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H280C291.046 0 300 8.95431 300 20V280C300 291.046 291.046 300 280 300H20C8.9543 300 0 291.046 0 280V20Z"
            fill="#2DB0CD"
          />
          <path
            d="M50 145C50 133.954 58.9543 125 70 125H230C241.046 125 250 133.954 250 145V155C250 166.046 241.046 175 230 175H70C58.9543 175 50 166.046 50 155V145Z"
            fill={getMarkColor()}
          />
          <path
            d="M145 250C133.954 250 125 241.046 125 230V70C125 58.9543 133.954 50 145 50H155C166.046 50 175 58.9543 175 70V230C175 241.046 166.046 250 155 250H145Z"
            fill={getMarkColor()}
          />
          <path d="M125 125H175V175H125V125Z" fill={getMarkColor()} />
        </svg>
      );
    } else if (value === -1) {
      return (
        <svg
          viewBox="0 0 300 300"
          fill="none"
          height="80"
          width="80"
          style={{
            borderRadius: 10,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H280C291.046 0 300 8.95431 300 20V280C300 291.046 291.046 300 280 300H20C8.9543 300 0 291.046 0 280V20Z"
            fill="#2DB0CD"
          />
          <path
            d="M50 145C50 133.954 58.9543 125 70 125H230C241.046 125 250 133.954 250 145V155C250 166.046 241.046 175 230 175H70C58.9543 175 50 166.046 50 155V145Z"
            fill={getMarkColor()}
          />
        </svg>
      );
    }
  };

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "'M PLUS 1'",
          height: 420,
          width: 420,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: backgroundColor,
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ display: "flex", paddingRight: 20 }}>
              {renderSide(dice[0])}
            </div>

            <div style={{ display: "flex" }}>{renderSide(dice[1])}</div>
          </div>

          <div
            style={{
              display: "flex",
              paddingTop: 20,
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                paddingRight: 20,
              }}
            >
              {renderSide(dice[2])}
            </div>
            {renderSide(dice[3])}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: getTextColor(),
          }}
        >
          <span
            style={{
              display: "flex",
            }}
          >
            {Number(result) + Number(mod) > 0 ? "+" : ""}
            {Number(result) + Number(mod)}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: "34px",
            color: getTextColor(),
          }}
        >
          <span>{description}</span>
        </div>

        <div
          style={{
            paddingTop: 6,
            display: "flex",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          <span
            style={{
              display: Number(mod) === 0 ? "none" : "flex",
              color: getTextColor(),
            }}
          >
            modified by {Number(mod) > 0 ? "+" + mod : mod}
          </span>
        </div>
      </div>
    ),
    {
      width: 420,
      height: 420,
      fonts: [
        {
          name: "M_PLUS_1",
          data: Mplus1RegularFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "M_PLUS_1",
          data: Mplus1RegularFontBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
