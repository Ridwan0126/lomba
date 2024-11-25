import React, { useState } from "react";
import { SearchIcon, Mail, Bell, LogOut } from "lucide-react";
import { useUser } from "./UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  {
    id: 1,
    user: "@Budimulyono",
    avatar: "/placeholder.svg?height=32&width=32",
    message:
      "Permintaan baru! Pengguna budi telah meminta penjemputan sampah pada 12 November",
    time: "2m ago",
  },
  {
    id: 2,
    user: "@Setiawan",
    avatar: "/placeholder.svg?height=32&width=32",
    message:
      "Permintaan baru! Pengguna budi telah meminta penjemputan sampah pada 11 November",
    time: "5m ago",
  },
  {
    id: 3,
    user: "@Joniman",
    avatar: "/placeholder.svg?height=32&width=32",
    message:
      "Permintaan baru! Pengguna budi telah meminta penjemputan sampah pada 10 November",
    time: "10m ago",
  },
  {
    id: 4,
    user: "@Yantopasarb",
    avatar: "/placeholder.svg?height=32&width=32",
    message:
      "Permintaan baru! Pengguna budi telah meminta penjemputan sampah pada 11 November",
    time: "15m ago",
  },
];

const notifications = [
  {
    id: 1,
    title: "Permintaan Baru",
    description: "Ada 3 permintaan penjemputan sampah baru",
    time: "Baru saja",
  },
  {
    id: 2,
    title: "Pembayaran Berhasil",
    description: "Pembayaran untuk order #12345 telah berhasil",
    time: "5m yang lalu",
  },
  {
    id: 3,
    title: "Pengingat",
    description: "Jadwal penjemputan sampah untuk hari ini",
    time: "1h yang lalu",
  },
];

const Navbar = ({ pageTitle, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { userProfile } = useUser();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="p-4">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center ml-2">
            <h1 className="text-xl font-semibold text-[#2CC297]">
              {pageTitle}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Icon */}
            {/* <div className="relative w-64">
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                className="pl-10 w-full px-3 py-2 border rounded"
                                placeholder="Search..."
                                type="search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                aria-label="Search"
                            />
                        </div> */}

            {/* Messages Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Mail className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                    {messages.length}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0" align="end">
                <Card className="shadow-lg">
                  <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Pesan</h2>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <div className="divide-y">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className="flex items-start gap-3 p-4 hover:bg-gray-50"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={message.avatar} />
                            <AvatarFallback>{message.user[1]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-black">
                              {message.user}
                            </p>
                            <p className="text-sm text-gray-600">
                              {message.message}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </Card>
              </PopoverContent>
            </Popover>

            {/* Notifications Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                    {notifications.length}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0" align="end">
                <Card className="shadow-lg">
                  <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Notifications</h2>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <div className="divide-y">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="flex items-start gap-3 p-4 hover:bg-gray-50"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={
                                notification.avatar ||
                                "/placeholder.svg?height=40&width=40"
                              }
                            />
                            <AvatarFallback>
                              {notification.title[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-black">
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              {notification.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </Card>
              </PopoverContent>
            </Popover>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium">{fullName}</div>
                <div className="text-xs text-gray-500">{userProfile.role}</div>
              </div>
              <img
                src={userProfile.profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={userProfile.profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left hidden sm:block">
                <div className="text-sm font-medium">{fullName}</div>
                <div className="text-xs text-gray-500">{userProfile.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Messages Popover (Mobile) */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Mail className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                      {messages.length}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-screen max-w-[235px] p-0 "
                  align="end"
                  alignOffset={-8}
                  sideOffset={8}
                >
                  <Card className="shadow-lg">
                    <div className="p-4 border-b">
                      <h2 className="text-lg font-semibold">Pesan</h2>
                    </div>
                    <ScrollArea className="h-[370px]">
                      <div className="divide-y">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className="flex items-start gap-2 p-3 hover:bg-gray-50"
                          >
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={message.avatar} />
                              <AvatarFallback>{message.user[1]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium text-black">
                                {message.user}
                              </p>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {message.message}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </Card>
                </PopoverContent>
              </Popover>

              {/* Notifications Popover (Mobile) */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                      {notifications.length}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-screen max-w-[290px] p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={8}
                >
                  <Card className="shadow-lg">
                    <div className="p-4 border-b">
                      <h2 className="text-lg font-semibold">Notifications</h2>
                    </div>
                    <ScrollArea className="h-[250px]">
                      <div className="divide-y">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className="flex items-start gap-2 p-3 hover:bg-gray-50"
                          >
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={
                                  notification.avatar ||
                                  "/placeholder.svg?height=40&width=40"
                                }
                              />
                              <AvatarFallback>
                                {notification.title[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium text-black">
                                {notification.title}
                              </p>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {notification.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </Card>
                </PopoverContent>
              </Popover>
              {/* Logout Button (Mobile/Tablet) */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onLogout}
                className="lg:hidden"
              >
                <LogOut className="h-5 w-5 text-red-600" />
              </Button>
            </div>
          </div>

          {/* Search Icon for Mobile */}
          {/* <div className="relative w-full">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            className="pl-10 w-full px-3 py-2 border rounded"
                            placeholder="Search..."
                            type="search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            aria-label="Search"
                        />
                    </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
