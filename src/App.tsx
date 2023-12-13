import { useQuery } from '@tanstack/react-query'
import './App.css'
import Navigation from './components/Navigation';

function App() {
    const { data: helloWorld } = useQuery({
        queryKey: ["hello-world-query"],
        queryFn: () => "Hello, world!",
    });

    return (
    <div>
    </div>
    )
}

export default App
