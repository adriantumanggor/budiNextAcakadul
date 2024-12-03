'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

interface AuthContextType {
  user: { user_id: string; karyawan_id: string; username: string, is_completed:boolean } | null
  setUser: (user: { user_id: string; karyawan_id: string; username: string, is_completed:boolean } | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ user_id: string; karyawan_id: string; username: string, is_completed:boolean } | null>(null)

  useEffect(() => {
    const token = Cookies.get('auth_token')
    if (token) {
      const decoded = jwt.decode(token) as { user_id: string; karyawan_id: string; username: string, is_completed:boolean } | null
      if (decoded) {
        setUser(decoded)
      }
    }
  }, [])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
