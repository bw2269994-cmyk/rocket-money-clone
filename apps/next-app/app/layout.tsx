import './globals.css';

export const metadata = {
  title: 'Rocket Money Clone',
  description: 'Rocket Money inspired fintech dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
