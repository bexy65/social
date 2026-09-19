import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";
import ProtectedRoute from "../components/ProtectedRoute";
import { routes } from "./config/routes";

function App() {
  return (
    <BrowserRouter>
        <div className="h-screen flex flex-col overflow-hidden">

          <Header />

          <main className="flex-1 min-h-0 overflow-y-auto">
            <Routes>
              {routes.map(route => {
                const Page = route.element;

                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      route.protected ? (
                          <ProtectedRoute>
                              <Page />
                          </ProtectedRoute>
                      ) : (
                          <Page />
                      )
                    }
                  />
                );
              })}
            </Routes>
          </main>

          <BottomNav />

        </div>
    </BrowserRouter>
  );
}

export default App
