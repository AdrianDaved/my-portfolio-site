import "./globals.css";

export const metadata = {
  title: "Adrian's Portfolio",
  description: "Welcome to my portfolio website! Here, you'll find a showcase of my projects, skills, and experiences."
};

export default function RootLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
    <html lang="en">
        <body>{children}</body>
    </html>
    );
}