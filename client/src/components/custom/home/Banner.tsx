import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="flex items-center text-center justify-center gap-5 flex-col p-10 h-[75vh] w-full pattern-for-banner">
      <h1 className="text-7xl font-semibold capitalize">
        Delightful events start here.
      </h1>
      <p className="text-xl font-medium text-gray-200">
        Set up an event page, invite friends and sell tickets. Host a memorable
        event today.
      </p>

      <Button
        variant="default"
        className="w-50 text-10xs font-medium capitalize"
      >
        Create your first event
      </Button>
    </div>
  );
};

export default Banner;
