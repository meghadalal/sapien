import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const SidebarData  = [
    {
        title: "Home",
        icon: <HomeOutlinedIcon />,
        link: "/home"
    },
    {
        title: "Chats",
        icon: <ChatBubbleOutlineOutlinedIcon />,
        link: "/chats"
    },
    {
        title: "Schedule",
        icon: <DateRangeOutlinedIcon />,
        link: "/schedule"
    },
    {
        title: "Clients",
        icon: <AccountCircleOutlinedIcon />,
        link: "/clients"
    },
    {
        title: "Bookings",
        icon: <FactCheckOutlinedIcon />,
        link: "/bookings"
    },
    {
        title: "Programs",
        icon: <FilterVintageOutlinedIcon />,
        link: "/programs"
    },
    {
        title: "Packages",
        icon: <Inventory2OutlinedIcon />,
        link: "/packages"
    },
    {
        title: "Resources",
        icon: <SavingsOutlinedIcon />,
        link: "/resources"
    },
    {
        title: "Finance",
        icon: <LocalAtmOutlinedIcon />,
        link: "/finance"
    },
    {
        title: "Settings",
        icon: <SettingsOutlinedIcon />,
        link: "/settings"
    }
]