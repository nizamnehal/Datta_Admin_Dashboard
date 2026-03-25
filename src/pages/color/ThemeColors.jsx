import ColorRow from "./ColorRow";

function ThemeColors() {

  const primary = [
    { label: "50", value: "#c6e2f0" },
    { label: "100", value: "#9bcfe5" },
    { label: "200", value: "#6fbcd9" },
    { label: "300", value: "#49a9cf" },
    { label: "400", value: "#2e9ac6" },
    { label: "500", value: "#1e8fbe" },
    { label: "600", value: "#177aa3" },
    { label: "700", value: "#125e7c" },
    { label: "800", value: "#0c4356" },
    { label: "900", value: "#062730" },
    { label: "950", value: "#021318" }
  ];

  const secondary = [
    { label: "50", value: "#cfd6dd" },
    { label: "100", value: "#b9c2cb" },
    { label: "200", value: "#9ea9b5" },
    { label: "300", value: "#83909e" },
    { label: "400", value: "#6c7a88" },
    { label: "500", value: "#5a6773" },
    { label: "600", value: "#4c5863" },
    { label: "700", value: "#3a424a" },
    { label: "800", value: "#2a3138" },
    { label: "900", value: "#1c2127" },
    { label: "950", value: "#0e1114" }
  ];

  const success = [
    { label: "50", value: "#c6efe3" },
    { label: "100", value: "#a3e6d2" },
    { label: "200", value: "#78dcc0" },
    { label: "300", value: "#55d2af" },
    { label: "400", value: "#3cc99f" },
    { label: "500", value: "#22c18f" },
    { label: "600", value: "#1da97c" },
    { label: "700", value: "#168561" },
    { label: "800", value: "#0f5f46" },
    { label: "900", value: "#08382a" },
    { label: "950", value: "#031d14" }
  ];

  const danger = [
    { label: "50", value: "#f3c8c3" },
    { label: "100", value: "#e8a39b" },
    { label: "200", value: "#dc7e73" },
    { label: "300", value: "#d15c4f" },
    { label: "400", value: "#c43e2e" },
    { label: "500", value: "#ba2d1c" },
    { label: "600", value: "#9f2618" },
    { label: "700", value: "#7c1e12" },
    { label: "800", value: "#58150d" },
    { label: "900", value: "#350c07" },
    { label: "950", value: "#1a0603" }
  ];

  const warning = [
    { label: "50", value: "#f3e7c2" },
    { label: "100", value: "#ecd79a" },
    { label: "200", value: "#e5c86f" },
    { label: "300", value: "#deb94a" },
    { label: "400", value: "#d8aa29" },
    { label: "500", value: "#c9991f" },
    { label: "600", value: "#a37c19" },
    { label: "700", value: "#7a5d12" },
    { label: "800", value: "#54400c" },
    { label: "900", value: "#2d2106" },
    { label: "950", value: "#140f02" }
  ];

  const info = [
    { label: "50", value: "#c9dfe8" },
    { label: "100", value: "#a9ccd9" },
    { label: "200", value: "#84b6c9" },
    { label: "300", value: "#64a4bc" },
    { label: "400", value: "#4794b0" },
    { label: "500", value: "#2c83a4" },
    { label: "600", value: "#236e8a" },
    { label: "700", value: "#1a556a" },
    { label: "800", value: "#123d4a" },
    { label: "900", value: "#09252b" },
    { label: "950", value: "#041214" }
  ];

  const dark = [
    { label: "50", value: "#6b7280" },
    { label: "100", value: "#4b5563" },
    { label: "200", value: "#374151" },
    { label: "300", value: "#1f2937" },
    { label: "400", value: "#111827" },
    { label: "500", value: "#0f172a" }
  ];

  return (
    <div className="bg-white rounded shadow p-6">

      <h2 className="text-lg font-semibold mb-6">
        Theme Color
      </h2>

      <ColorRow title="Primary" colors={primary} />
      <ColorRow title="Secondary" colors={secondary} />
      <ColorRow title="Success" colors={success} />
      <ColorRow title="Danger" colors={danger} />
      <ColorRow title="Warning" colors={warning} />
      <ColorRow title="Info" colors={info} />
      <ColorRow title="Dark" colors={dark} />

    </div>
  );
}

export default ThemeColors;