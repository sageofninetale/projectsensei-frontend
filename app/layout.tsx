export const metadata = { title: 'ProjectSensei — Frontend Preview' };

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: 24 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
