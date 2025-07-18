"use client"

import { useEffect } from "react"
import { initFirebase } from "@/lib/firebase.config"

export function FirebaseInitializer() {
  useEffect(() => {
    initFirebase()
  }, [])

  return null
}
