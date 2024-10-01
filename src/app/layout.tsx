import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/global.scss';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Allandt Bik-Elliott :: Developer',
  description:
    'Allandt is a developer living in Hertford, a train-ride away from London who has experience creating front- and back-ends for websites, installations for events and mobile apps.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
