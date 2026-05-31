"use client"

import React from "react"
import { PanelLeftOpen, PanelRightClose } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  onSidebarToggle: () => void
  isSidebarOpen: boolean
}

export function EditorNavbar({
  onSidebarToggle,
  isSidebarOpen,
}: EditorNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-surface border-b border-border-default z-40 flex items-center px-4 gap-4">
      {/* Left section */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelRightClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Center section */}
      <div className="flex-1" />

      {/* Right section */}
      <div className="flex items-center" />
    </nav>
  )
}
