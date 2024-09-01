// src/pages/Home.tsx
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter, useSearch } from "@tanstack/react-router";

const Home: React.FC = () => {
  const router = useRouter();
  const searchedItem = useSearch({ from: "/", strict: true });

  useEffect(() => {
    axios
      .get("http://ip.jsontest.com/")
      .then((response) => {
        const urlObject = { ipAddress: response.data };
      
        router.navigate({
          search: (prev) => ({ ...prev, ...urlObject }),
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-[2rem]">React & Tanstack Router Test</h1>
      <h2 className="text-[1.2rem] mt-10">State from URL:</h2>

      <div className="mt-10">
        <p className="text-[1.8rem]">
          Your current IP address is:{" "}
          <span className="font-bold">
            {
              (
                searchedItem as {
                  ipAddress: { ip: string };
                }
              ).ipAddress?.ip
            }
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
