// Only this segment is dynamic (keeps /auth/callback from being prerendered)
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function CallbackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
