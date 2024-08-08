import type { Metadata } from "next";
import "./globals.css";
import ApolloProviderWrapper from "@/components/ApolloProvider";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProviderWrapper>
    <html lang="en">
     
      <body className="min-h-screen flex">{children}</body>
      
    </html>
    </ApolloProviderWrapper>
  );
}
