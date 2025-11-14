import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          background: "#020719",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4092ef",
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        AL
      </div>
    ),
    {
      width: 64,
      height: 64,
    }
  );
}
