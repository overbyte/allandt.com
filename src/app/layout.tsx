import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from '@/components/header';
import './globals.css';

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
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <main className="container mx-auto px-12">{children}</main>
        <footer className="container mx-auto flex justify-center p-12">
          Copyright &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
