import {Route, Routes} from "react-router-dom";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./app/pages/shared/Topbar";
import Sidebar from "./app/pages/shared/Sidebar";
import Dashboard from "./app/pages/dashboard";
import Team from "./app/pages/team";
import Contacts from "./app/pages/contacts";
import Invoices from "./app/pages/invoices";
import ProfileForm from "./app/pages/profileForm";
import Calendar from "./app/pages/calendar";
import FAQ from "./app/pages/faq";
import Bar from "./app/pages/bar";
import Pie from "./app/pages/pie";
import Line from "./app/pages/line";
import Geography from "./app/pages/geography";


function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <Sidebar />
                    <main className='content'>
                        <Topbar/>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<ProfileForm />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/bar" element={<Bar/>} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes>

                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
