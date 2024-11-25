import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useUser } from '../../component/layout/UserContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Settings = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { userProfile, updateUserProfile } = useUser();
  const [profileData, setProfileData] = useState({
    firstName: userProfile?.firstName || '',
    lastName: userProfile?.lastName || '',
    email: "mulyonognwn@gmail.com",
    phone: "085712345678",
    gender: "female",
    role: userProfile?.role || '',
    address: "Jl. Hang Lekiu KM 2 Nongsa Batam Indonesia.",
    profileImage: userProfile?.profileImage || "/Avatar.svg?height=96&width=96"
  });
  const fileInputRef = useRef(null);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = {
      ...profileData,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      gender: formData.get("gender"),
      role: formData.get("role"),
      address: formData.get("address"),
    };
    setProfileData(updatedData);
    updateUserProfile({
      firstName: updatedData.firstName,
      lastName: updatedData.lastName,
      role: updatedData.role,
      profileImage: updatedData.profileImage
    });
    setIsEditDialogOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setProfileData(prev => ({
          ...prev,
          profileImage: imageUrl
        }));
        updateUserProfile({ ...userProfile, profileImage: imageUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    const defaultImage = "/Avatar.svg?height=96&width=96";
    setProfileData(prev => ({
      ...prev,
      profileImage: defaultImage
    }));
    updateUserProfile({ ...userProfile, profileImage: defaultImage });
  };

  const renderEditDialog = () => (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="max-w-md mx-auto w-[95%] p-4 sm:p-6 h-[80vh] overflow-y-auto">
        <DialogHeader className="mb-4">
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleEditSubmit} className="space-y-4 pb-20">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                defaultValue={profileData.firstName}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                defaultValue={profileData.lastName}
              />
            </div>
          </div>
          
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={profileData.email}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              defaultValue={profileData.phone}
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select name="gender" defaultValue={profileData.gender}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Perempuan</SelectItem>
                <SelectItem value="male">Laki-laki</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              name="role"
              defaultValue={profileData.role}
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <textarea
              id="address"
              name="address"
              defaultValue={profileData.address}
              rows={3}
              className="w-full min-h-[80px] border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t flex gap-2 sm:relative sm:border-0 sm:justify-end sm:bg-transparent sm:p-0">
            <Button
              type="button"
              variant="destructive"
              onClick={() => setIsEditDialogOpen(false)}
              className="flex-1 sm:flex-none"
            >
              Batal
            </Button>
            <Button type="submit" className="flex-1 sm:flex-none">
              Simpan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-6">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            {/* Profile Section */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Profile picture</h2>
              <Button 
                className="bg-[#4182F9] hover:bg-[#3671e0] text-white w-auto"
                onClick={() => setIsEditDialogOpen(true)}
              >
                Edit
              </Button>
            </div>

            {/* Avatar and Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={profileData.profileImage} alt="Profile picture" className="object-cover" />
                <AvatarFallback>
                  {profileData.firstName?.[0] || ''}{profileData.lastName?.[0] || ''}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-row gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <Button
                  variant="outline"
                  className="bg-[#55B3A4] text-white border-[#55B3A4] hover:bg-[#55B3A4]/10"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Change picture
                </Button>
                <Button
                  variant="outline"
                  className="text-[#F64A4A] border-[#F64A4A] hover:bg-[#F64A4A]/10"
                  onClick={handleDeleteImage}
                >
                  Delete picture
                </Button>
              </div>
            </div>

            {/* Profile Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <Input 
                  value={profileData.firstName} 
                  className="w-full bg-gray-50" 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <Input 
                  value={profileData.lastName} 
                  className="w-full bg-gray-50" 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  value={profileData.email}
                  className="w-full bg-gray-50"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <Input 
                  value={profileData.phone} 
                  className="w-full bg-gray-50" 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <Input 
                  value={profileData.gender === 'female' ? 'Perempuan' : 'Laki-laki'} 
                  className="w-full bg-gray-50" 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <Input 
                  value={profileData.role} 
                  className="w-full bg-gray-50" 
                  disabled 
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  value={profileData.address}
                  rows={3}
                  className="w-full border rounded-md p-2 text-sm bg-gray-50"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {renderEditDialog()}
    </>
  );
};

export default Settings;