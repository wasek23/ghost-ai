"use client"

import React from "react"
import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-64 bg-elevated border-r border-border-default z-40 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-16 border-b border-border-default flex items-center justify-between px-4">
          <h2 className="text-lg font-semibold text-primary">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <Tabs defaultValue="projects" className="w-full flex flex-col h-full">
            <TabsList className="w-full rounded-none border-b border-border-default bg-transparent px-4 py-0">
              <TabsTrigger
                value="projects"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand"
              >
                My Projects
              </TabsTrigger>
              <TabsTrigger
                value="shared"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand"
              >
                Shared
              </TabsTrigger>
            </TabsList>

            {/* Tab Contents */}
            <div className="flex-1 overflow-auto">
              <TabsContent value="projects" className="mt-0 p-4 h-full flex items-center justify-center text-center">
                <div className="space-y-2">
                  <p className="text-secondary text-sm">No projects yet</p>
                  <p className="text-muted text-xs">
                    Create your first project to get started
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="shared" className="mt-0 p-4 h-full flex items-center justify-center text-center">
                <div className="space-y-2">
                  <p className="text-secondary text-sm">No shared projects</p>
                  <p className="text-muted text-xs">
                    Projects shared with you will appear here
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Bottom button */}
        <div className="border-t border-border-default p-4">
          <Button variant="default" className="w-full gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </>
  )
}
