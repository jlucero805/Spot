import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@tanstack/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navigation, { NavigationPage } from './components/Navigation.tsx'
import Find from './components/Find.tsx'
import Reserve from './components/Reserve.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/find",
        element: <Navigation page={NavigationPage.FIND}  content={<Find />}/>,
    },
    {
        path: "/property",
        element: <Navigation
            page={NavigationPage.RESERVE}
            content={<Reserve />}
            hideBottomNav={true}
        />
    },
    {
        path: "/reserve",
        element: <Navigation
            page={NavigationPage.RESERVE} 
            content={<div>
            </div>}
        />,
    },
    {
        path: "/profile",
        element: <Navigation page={NavigationPage.PROFILE} content={<div>hi</div>}/>,
    },
]);

const queryClient = new QueryClient();

const StateContext = createContext({});

function App() {
    const [location, setLocation] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    
    return (
        <React.StrictMode>
            <StateContext.Provider value={{
                location, setLocation,
                startDate, setStartDate,
                endDate, setEndDate,
            }}>
                 <QueryClientProvider client={queryClient}> 
                    <RouterProvider router={router} />
                 </QueryClientProvider> 
            </StateContext.Provider>
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App/>)
