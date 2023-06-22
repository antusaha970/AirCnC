import { NavBar } from "@components";
import "@styles/font.css";
import "@styles/globals.css";
export const metadata = {
  title: "AirCnC",
  description: "Book your hotel seamlessly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
