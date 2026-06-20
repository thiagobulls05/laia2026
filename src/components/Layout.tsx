import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-app-bg">
      <main className="w-full max-w-281.5 flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}