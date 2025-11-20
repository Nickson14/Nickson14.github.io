import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
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

