"use client";
import React, { useState } from "react";
import Typewriter from "./Typewriter";
import Image from "next/image";
import Link from "next/link";
import {useAppDispatch} from '../Redux/hooks'
import {roleAssign} from "../Redux/slices/roleSlice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Home = () => {
  const [user,setUser]=useState("Admin");
  const disp=useAppDispatch();
  disp(roleAssign(user))

  return (
    <div className="p-3 ">
      <div className="grid sm:grid-cols-2">
        <div className="m-4 flex items-center justify-center">
          <div>
            <p className="text-green-700 sm:text-4xl lg:text-5xl text-2xl">
              Hi Mohan Krishna!
            </p>
            <p className="sm:text-2xl lg:text-3xl text-xl">
              Welcome to Im-par Self Service Portal
            </p>
          </div>
        </div>

        <div className="flex-end mr-14">
          <Image src="/homeImages/homeimagenew.png" width={300} height={300} alt="" />
        </div>
      </div>

      <div>
        <p className="ml-8 m-3 sm:text-2xl md:text-3xl lg:text-4xl text-xl">
          Services
        </p>
      </div>

      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
        <div className="hover:scale-105 transition duration-500 cursor-pointer object-cover m-3 p-2 shadow-2xl rounded-2xl relative">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/homeImages/UserDetails.jpg"
                width={40}
              />
              <div className="flex flex-row">
                <p className="text-md">MyDetails</p>
                <Link href="/Home/Services/VacationManagement/UserLeaveDetails">
                <Button className="hover:scale-110 transition duration-500 cursor-pointer object-cover absolute top-3 right-3">
                  <Image
                    src="/homeImages/arrow3.png"
                    width={40}
                    height={40}
                    alt="arrow"
                  />
                </Button>
                </Link>
              </div>
            </CardHeader>
            <hr />
            <CardBody>
              <p>
                Discover my professional journey and leave balance at a glance
                with a touch of personal flair.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="hover:scale-105 transition duration-500 cursor-pointer object-cover m-3 p-2 shadow-2xl rounded-2xl">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/homeImages/ApplyLeave.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Apply Leave</p>
                <Link href="/Home/Services/VacationManagement/ApplyLeave">
                <Button className="hover:scale-110 transition duration-500 cursor-pointer object-cover absolute top-3 right-3">
                  <Image
                    src="/homeImages/arrow3.png"
                    width={40}
                    height={40}
                    alt="arrow"
                  />
                </Button>
                </Link>
              </div>
            </CardHeader>
            <hr />
            <CardBody>
              <p>
                Request time off effortlessly – submit your leave applications
                with ease and enjoy a well-deserved break.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="hover:scale-105 transition duration-500 cursor-pointer object-cover m-3 p-2 shadow-2xl rounded-2xl">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/homeImages/holidays.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Public Holidays</p>
                <Link href="/Home/Services/VacationManagement/PublicHolidays">
                <Button className="hover:scale-110 transition duration-500 cursor-pointer object-cover absolute top-3 right-3">
                  <Image
                    src="/homeImages/arrow3.png"
                    width={40}
                    height={40}
                    alt="arrow"
                  />
                </Button>
                </Link>
              </div>
            </CardHeader>
            <hr />
            <CardBody>
              <p>
                Track your journey of moments away – view your leave history and
                stay in control of your work-life balance.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="hover:scale-105 transition duration-500 cursor-pointer object-cover m-3 p-2 shadow-2xl rounded-2xl">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/homeImages/LeaveHistory.png"
                width={40}
              />
              <div className="flex flex-row justify-end">
                <p className="text-md">LeaveHistory</p>
                <Link href="/Home/Services/VacationManagement/LeaveHistory">
                <Button className="hover:scale-110 transition duration-500 cursor-pointer object-cover absolute top-3 right-3">
                  <Image
                    src="/homeImages/arrow3.png"
                    width={40}
                    height={40}
                    alt="arrow"
                  />
                </Button>
                </Link>
              </div>
            </CardHeader>
            <hr />
            <CardBody>
              <p>
                Stay informed on upcoming breaks – explore the list of public
                holidays and plan your time accordingly.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
