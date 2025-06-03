import { LanguageProvider } from "./common/i18n/languageContext";
import AppRoutes from "./common/routes";
import "./common/style/root.css";

const App = () => {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  );
};

export default App;
