import Sidebar from './components/Sidebar'
import Container from './Container'

const App = () => {
  return (
    <div className={`min-h-screen w-full flex bg-hero`}>
      <Sidebar />
      <Container />
    </div>
  )
}

export default App