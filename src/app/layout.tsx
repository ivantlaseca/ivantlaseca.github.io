import Layout  from './components/Layout'
import "./globals.css";

export const metadata = {
  title: "Ivan Tlaseca | Software Engineer",
  description:
    "Software engineer focused on full-stack systems, internal tools, developer workflows, and practical AI-assisted engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
