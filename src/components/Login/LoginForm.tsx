'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { login } from '@/app/services/authService'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/authContext"


export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { setUser } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await login({ username, password })

      Cookies.set('auth_token', response.token, { expires: 1 })

      const decodedToken = jwt.decode(response.token) as { user_id: string; karyawan_id: string; username: string; role: string, is_completed: boolean }

      setUser({
        user_id: decodedToken.user_id,
        karyawan_id: decodedToken.karyawan_id,
        username: decodedToken.username,
        is_completed: decodedToken.is_completed
      })

      const userRole = decodedToken?.role;

      switch (userRole) {
        case 'admin':
          router.push('/admin')
          break
        case 'staff':
          router.push('/staff')
          break
        case 'manager':
          router.push('/manager')
          break
        default:
          router.push('/dashboard')
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.')
      console.error('Login error:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-600">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-0 shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-white">Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-bold text-center text-white">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-white/20 border-0 text-white font-bold placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-bold text-center text-white">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/20 border-0 text-white font-bold placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
              />
            </div>
            {error && <p className="text-red-300 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

