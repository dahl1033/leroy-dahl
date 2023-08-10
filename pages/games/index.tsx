import { useEffect } from "react";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
    setTimeout(() => {
    router.push('/about');
    }
    , 10000);

  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="text-7xl font-bold text-gray-400 mb-8 text-center">
        Coming Soon
      </h1>
      <h3 className="text-sm text-gray-500">
        A pokemon style game about my life
      </h3>
      <h3 className="text-sm text-gray-500">
        You'll be redirected soon
      </h3>
    </div>
  );
};
export default Contact;
