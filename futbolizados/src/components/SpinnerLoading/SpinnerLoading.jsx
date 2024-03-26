import { Spinner, Button } from "flowbite-react";

const SpinnerLoading = () => {
  return (
    <div className="flex flex-row gap-3 ">
        <div className="flex justify-center w-screen bg-gray-900">

      <Button>
        <Spinner aria-label="Spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
        </div>
   
    </div>
  )
};

export default SpinnerLoading;
