import "@/app/globals.css"; // ✅ required for Tailwind to work

export const metadata = {
  title: "ProjectSensei UI",
  description: "Dark dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
