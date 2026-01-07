import "./styles/ctf.css";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="app-root">
      <MainLayout>
        <div className="app-content">
          <AppRoutes />
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
