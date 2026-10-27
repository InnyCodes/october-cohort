import { Route, Routes, useLocation } from "react-router-dom"

import { PageLayout } from "./components/PageLayout"

import { Contact } from "./Pages/Contact"
import { Dashboard } from "./Pages/Dashboard"
import { About } from "./Pages/About"
import { Home } from "./Pages/Home"
import { PageNotFound } from "./Pages/PageNotFound"

import { Profile } from "./dashboardPages/Profile"
import { Overview } from "./dashboardPages/Overview"
import { Settings } from "./dashboardPages/Settings"
import { Logs } from "./dashboardPages/Logs"



function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<h1>THe home page</h1>} /> */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>


        <Route path="/dashboard" element={<Dashboard />}>
          <Route index="profile" element={<Profile />} />
          <Route path="overview" element={< Overview />} />
          <Route path="settings" element={< Settings />} />
          <Route path="logs" element={< Logs />} />
        </Route>

        <Route path="*" element={< PageNotFound />} />

      </Routes>
    </div >

  )
}

export default App
