import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
    const { data: helloWorld } = useQuery({
        queryKey: ["hello-world-query"],
        queryFn: () => "Hello, world!",
    });

    return (
        <>
            <div className="rounded-lg px-3 py-2 bg-red-100"> 
                { helloWorld }
            </div> 
        </>
    )
}

export default App
