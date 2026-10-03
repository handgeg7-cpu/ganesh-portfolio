import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganesh Handge | DevOps Engineer · Cloud · Platform Engineering",
  description:
    "Ganesh Handge is a DevOps Engineer focused on Azure, AWS, Kubernetes, Terraform, CI/CD, DevSecOps, Platform Engineering, SRE and AI-enabled engineering.",
  keywords: [
    "Ganesh Handge",
    "DevOps Engineer",
    "Cloud Engineer",
    "Cloud Architect",
    "Platform Engineer",
    "SRE",
    "Azure DevOps",
    "Azure",
    "AWS",
    "Kubernetes",
    "AKS",
    "Terraform",
    "Docker",
    "CI/CD",
    "DevSecOps",
    "GitOps",
    "Argo CD",
    "Platform Engineering",
    "AI Engineering",
  ],
  authors: [
    {
      name: "Ganesh Handge",
    },
  ],
  creator: "Ganesh Handge",
  publisher: "Ganesh Handge",

  openGraph: {
    title: "Ganesh Handge | DevOps · Cloud · Platform Engineering",
    description:
      "DevOps Engineer focused on cloud platforms, Kubernetes, infrastructure automation, DevSecOps, reliability and AI-enabled engineering.",
    type: "website",
    locale: "en_IN",
    siteName: "Ganesh Handge",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ganesh Handge | DevOps · Cloud · Platform Engineering",
    description:
      "DevOps Engineer focused on Azure, AWS, Kubernetes, Terraform, DevSecOps and Platform Engineering.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}