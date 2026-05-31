"use client"

import React, { useState } from "react"
import { EditorNavbar } from "./editor-navbar"
import { ProjectSidebar } from "./project-sidebar"

interface EditorLayoutProps {
  children?: React.ReactNode
}

export function EditorLayout({ children }: EditorLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-base">
      {/* Navbar */}
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Sidebar overlay */}
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main content area */}
      <main className="flex-1 pt-16 overflow-hidden bg-base">
        {children || (
          <div className="w-full h-full flex items-center justify-center text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-primary">Editor Canvas</h2>
              <p className="text-secondary">Your editor content goes here</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
