import React from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react"

// Custom UI components using Tailwind
function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-lg ${className}`}>{children}</div>
}

function CardHeader({ children, className = "" }) {
  return <div className={`p-6 border-b rounded-t-lg ${className}`}>{children}</div>
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Call Us</h3>
                <p className="text-slate-600 text-sm">+9630266921</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Email Us</h3>
                <p className="text-slate-600 text-sm">TrueHabitat@.com</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Visit Us</h3>
                <p className="text-slate-600 text-sm">
                  123 Business St<br />
                  New Delhi, NY 047693
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input type="text" placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <Input type="text" placeholder="Subject" />
                  <Textarea placeholder="Your Message" className="min-h-32 resize-none" />
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}