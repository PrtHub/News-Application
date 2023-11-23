import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import Explore from "./pages/Explore.jsx";
import Search from "./pages/Search.jsx";
import Save from "./pages/Save.jsx";
import TopHeadlines from "./pages/TopHeadlines.jsx";
import Categories from "./pages/Categories.jsx";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/search/:id" element={<Search />} />
            <Route path="/save" element={<Save />} />
            <Route path="/top-headlines" element={<TopHeadlines/>}/>
            <Route path="/categories" element={<Categories/>}/>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
