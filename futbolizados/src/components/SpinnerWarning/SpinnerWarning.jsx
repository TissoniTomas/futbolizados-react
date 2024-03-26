import { Spinner } from "flowbite-react";

function SpinnerWarning() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner size="xl" color="pink" aria-label="Warning spinner example" />
    </div>
  );
}

export default SpinnerWarning;
