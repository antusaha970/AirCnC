import { ClerkProvider } from "@clerk/nextjs";
import { MuiThemeProvider, NavBar } from "@components";
import ReduxProvider from "@redux/ReduxProvider/ReduxProvider";
import "@styles/font.css";
import "@styles/globals.css";
export const metadata = {
  title: "AirCnC",
  description: "Book your hotel seamlessly",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>
            <ReduxProvider>
              <MuiThemeProvider>
                <NavBar />
                {children}
              </MuiThemeProvider>
            </ReduxProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
