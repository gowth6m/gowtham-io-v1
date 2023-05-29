import "../styles/globals.css";
import "../styles/typingText.css";
import "../styles/side.css";
import "../styles/nav.css";
import Head from "./head";
import BackgroundAnimation from "@/components/misc/backgroundAnimation";
import SideEmail from "@/components/misc/sideEmail";
import SideSocials from "@/components/misc/sideSocials";
import NavBar from "@/components/nav/navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />

      <body>
        <BackgroundAnimation color={"white"} />
        <SideSocials />
        <SideEmail />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
