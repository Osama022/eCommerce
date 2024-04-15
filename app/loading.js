'use client'

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 bg-white z-20">
            <div className="loading"></div>
        </div>
    )
  }