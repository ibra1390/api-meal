import React from 'react'
import { useState } from "react";

export default function useOpen() {
    const [open, setOpen] = useState(false);

    function openDropdown() {
        setOpen(true);
    }

    function closeDropdown() {
        setOpen(false);
    }

    function toggleDropdown() {
        setOpen(!open);
    }

    return { open, openDropdown, closeDropdown, toggleDropdown };
}
