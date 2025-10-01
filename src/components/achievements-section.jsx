"use client"

import { useState, useEffect, useRef } from "react"

const achievementsData = [
  {
    id: 1,
    title: "2nd Place - ICP Hackathon 14",
    image: "/icphackathon14.png",
    description:
      "Presented cutting-edge Web3 solutions built on the Internet Computer Protocol, and my team's project demonstrated strong technical design, user experience, and implementation quality; earning us second place among a robust field of finalists.",
  },
  {
    id: 2,
    title: "Top 40 - SIC Batch 6",
    image: "/sicbatch6.jpg",
    description:
      "Advanced through a multi-stage national selection process involving coding, AI & IoT project development, and prototype pitching; selected from over 10,600 initial applicants into the top 40.",
  },
  {
    id: 3,
    title: "Peer Exam Tutor",
    image: "/peerexamtutor.jpg",
    description:
      "Recognized as a tutor of Responsive class Mid Term Exam Even Semester Period 2025/2026 held by BINUS Student Learning Community, helping students prepare for Code Reengineering exam, a subject focused on refactoring and software maintenance using Java",
  },
]

export default function AchievementsSection() {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-achievement-item]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-22 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements & Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition and awards that highlight my journey in technology and innovation
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <div
              key={achievement.id}
              data-id={achievement.id}
              data-achievement-item
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 ${
                visibleItems.has(achievement.id.toString()) ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Achievement Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={achievement.image || "/placeholder.svg"}
                  alt={achievement.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Achievement Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">{achievement.description}</p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}