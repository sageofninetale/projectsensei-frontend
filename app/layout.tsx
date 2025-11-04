export const metadata = {
  title: "ProjectSensei",
  description: "Next.js UI setup",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
