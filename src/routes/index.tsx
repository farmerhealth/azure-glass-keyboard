import { createFileRoute } from "@tanstack/react-router";
import { GlassKeyboard } from "@/components/glass-keyboard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Glass Keyboard — Teclado Virtual" },
      {
        name: "description",
        content:
          "Teclado virtual para celular com estética Glass UI, tons de azul-marinho e sugestões de tradução em inglês.",
      },
      {
        property: "og:title",
        content: "Glass Keyboard — Teclado Virtual",
      },
      {
        property: "og:description",
        content:
          "Teclado virtual para celular com estética Glass UI, tons de azul-marinho e sugestões de tradução em inglês.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-6">
      {/* Ambient glows for depth */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.45 0.14 255) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.35 0.1 240) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[520px]">
        <GlassKeyboard />
      </div>
    </main>
  );
}
