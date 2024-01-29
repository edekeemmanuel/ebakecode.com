import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <>
      <div id="error-page">
        <h1>Oops! it's not EBakeCode</h1>
        <h3>Sorry, an unexpected error has occurred.</h3>
        <p>Kindly check the URL again...</p>
        <p>
        <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}