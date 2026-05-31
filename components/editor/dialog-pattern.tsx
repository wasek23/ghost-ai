"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

interface DialogPatternProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children?: React.ReactNode
  footerActions?: React.ReactNode
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "w-full max-w-sm",
  md: "w-full max-w-md",
  lg: "w-full max-w-lg",
}

export function DialogPattern({
  isOpen,
  onClose,
  title,
  description,
  children,
  footerActions,
  size = "md",
}: DialogPatternProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={sizeClasses[size]}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {children && <div className="py-4">{children}</div>}

        {footerActions && <DialogFooter>{footerActions}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
