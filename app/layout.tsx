export const metadata = {
  title: "ProjectSensei — Preview",
  description: "Playful launchpad for ProjectSensei previews"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gradient-to-br from-pink-100 via-white to-sky-100 text-neutral-900">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"/>
        <style>{`
          :root { --accent:#7c3aed; }
          body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
          .card { background:#fff; border-radius:22px; box-shadow:0 10px 30px rgba(0,0,0,.08); }
          .btn { border-radius:14px; padding:.75rem 1rem; font-weight:600; }
          .btn-primary { background:var(--accent); color:#fff; }
          .muted { color:#666; }
          .pill { background: #eef; color:#334; padding:.25rem .6rem; border-radius:999px; font-size:.8rem; }
          .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
        `}</style>
        <main className="max-w-5xl mx-auto px-5 py-12">{children}</main>
      </body>
    </html>
  );
}
