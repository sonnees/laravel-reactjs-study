import Router from './routers/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UserProvider } from './components/context/user-context.jsx'

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App