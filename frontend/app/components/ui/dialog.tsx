import React from 'react'

export const Dialog: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="dialog">{children}</div>
)

export const DialogTrigger: React.FC<{ asChild: boolean, children: React.ReactNode }> = ({ asChild, children }) => (
  <div className="dialog-trigger">{children}</div>
)

export const DialogContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="dialog-content">{children}</div>
)

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="dialog-header">{children}</div>
)

export const DialogTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="dialog-title">{children}</div>
)