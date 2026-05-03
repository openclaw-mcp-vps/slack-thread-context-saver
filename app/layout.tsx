import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThreadVault – Save Slack Thread Context Before It Gets Buried",
  description: "Automatically saves important Slack threads to a searchable knowledge base with AI-powered tagging. Never lose critical context again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f42dcc6f-db65-4aca-a57e-4a04caa7a4ce"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
