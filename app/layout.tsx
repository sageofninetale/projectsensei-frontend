export const metadata = {
  title: 'ProjectSensei',
  description: 'Build Fearlessly — Sensei Has You',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* if you want global CSS, uncomment the next line and ensure the file exists */}
      {/* <link rel="stylesheet" href="/globals.css" /> */}
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
