'use client'; // This component must be a Client Component

import * as React from 'react';
import { Moon, Sun } from 'lucide-react'; // Icons for dark and light mode
import { useTheme } from 'next-themes'; // Hook from next-themes for theme management

import { Button } from '@/components/ui/button'; // Shadcn/ui Button component
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'; // Shadcn/ui Dropdown Menu components

export function ThemeToggle() { // Ensure this is 'export function', not 'export default function'
  const { setTheme } = useTheme(); // useTheme hook provides the setTheme function

  return (
    <DropdownMenu>
      {/* Dropdown trigger button */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {/* Sun icon for light mode, rotates on dark mode */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Moon icon for dark mode, rotates on light mode */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span> {/* Screen reader only text */}
        </Button>
      </DropdownMenuTrigger>
      {/* Dropdown menu content */}
      <DropdownMenuContent align="end">
        {/* Menu item to set theme to light */}
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        {/* Menu item to set theme to dark */}
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        {/* Menu item to set theme to system preference */}
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
