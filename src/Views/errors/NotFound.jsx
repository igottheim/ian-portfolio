import CoreFooter from "../../Components/CoreFooter";
import CoreHeader from "../../Components/CoreHeader";
import ErrorsHero from "../../Components/Errors/ErrorsHero";


function NotFound() {
  return (
    <div>
        <CoreHeader />
        <ErrorsHero errorCode="404" errorTitle="Page Not Found" errorDescription="The page you been looking for does not exist..." errorImage="https://http.cat/404" errorImageAlt="HTTP Cat 404" />
        <CoreFooter />
    </div>
  );
}

export default NotFound;
