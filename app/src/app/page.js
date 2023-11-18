"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Home() {
  const [userId, setUserId] = useState("")
  const router = useRouter()

  function navigate() {
    router.push("/about/contact/user/" + userId)
}
  return (
    <div>
    <Link href="/about">About Page</Link>
    <Link href="/about/contact">Contact Page</Link>
    <div>
      <input type="text" placeholder="user id" value={userId} onChange={(e) => setUserId(e.target.value)}/>
      <button onClick={navigate}>Go to Profile</button>
    </div>
  </div>
  )
}
