"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import {
  GraduationCap,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Shield,
  AlertCircle,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function StaffLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login attempt
    setTimeout(() => {
      setError("Invalid credentials. Please check your email and password.")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Logo Section */}
            <div className="text-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-foreground">Staff Portal</h1>
              <p className="text-muted-foreground mt-1">Brightwood Academy</p>
            </div>

            {/* Login Card */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-2">
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>
                  Sign in to access the staff dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel>Email Address</FieldLabel>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="staff@brightwoodacademy.edu"
                          className="pl-10"
                          required
                        />
                      </div>
                    </Field>
                    <Field>
                      <FieldLabel>Password</FieldLabel>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            {showPassword ? "Hide password" : "Show password"}
                          </span>
                        </button>
                      </div>
                    </Field>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link
                        href="#"
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </FieldGroup>
                </form>

                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground">
                    Need help accessing your account?
                  </p>
                  <Link
                    href="/contact"
                    className="text-sm text-primary hover:underline"
                  >
                    Contact IT Support
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="mt-6">
              <Card className="border-0 bg-secondary/50">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Secure Connection</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        This login page is protected with 256-bit SSL encryption. 
                        Your credentials are always transmitted securely.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Staff Portal Features:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-xs">Announcements</Badge>
                <Badge variant="outline" className="text-xs">Attendance</Badge>
                <Badge variant="outline" className="text-xs">Gradebook</Badge>
                <Badge variant="outline" className="text-xs">Calendar</Badge>
                <Badge variant="outline" className="text-xs">Resources</Badge>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
