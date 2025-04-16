"use client"

import { useToast } from "@/hooks/use-toast"

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text = "", className = "" }: CopyButtonProps) {
  const { toast } = useToast()

  const copyToClipboard = () => {
    if (!text) {
      toast({
        title: "Copy Failed",
        description: "No text to copy.",
        variant: "destructive",
        duration: 2000,
      })
      return
    }

    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied!",
          description: "Address copied to clipboard.",
          duration: 2000,
        })
      },
      (err) => {
        toast({
          title: "Copy Failed",
          description: "An error occurred while copying the address.",
          variant: "destructive",
          duration: 2000,
        })
        console.error("Copy failed:", err)
      },
    )
  }

  // Handle cases where text is empty or too short
  const displayText = !text
    ? "No address"
    : text.length <= 10
      ? text
      : `${text.substring(0, 6)}...${text.substring(text.length - 4)}`

  return (
    <button
      onClick={copyToClipboard}
      className={`px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md flex items-center gap-1 transition-all duration-300 hover-glow ${className}`}
    >
      <code className="text-sm font-mono text-gray-800">{displayText}</code>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-gray-600"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    </button>
  )
}
