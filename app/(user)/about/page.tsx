import React from 'react'
import { Metadata } from 'next'

// Metadata for page about
export const metadata: Metadata = {
	title: "This is the about page",
	description: "Practice with seo with next js practice 008",
}

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-6xl font-bold">ABOUT</h1>

      <div className="flex items-center">
        <img src="https://i.pinimg.com/564x/52/78/65/527865e1176c23b58bfe9925e6026fac.jpg" alt="Image" className="w-96 h-auto mr-8 rounded-lg"/>

        <div>
          <h2 className="text-4xl font-bold">Here's Our Story</h2>
          <p className="text-gray-600">
            In the heart of Tokyo, Kazuki rises within the Yakuza ranks, wielding power and influence. <br />
            Yet, as he climbs higher, he grapples with the moral complexities of his choices. <br />
            Torn between loyalty to his clan and the desire for redemption, Kazuki faces a pivotal crossroads. <br />
            In a daring act of defiance, he breaks free from the underworld's grip, <br />
            seeking a new path of redemption and peace. Though haunted by his past, Kazuki's <br />
            journey symbolizes the eternal struggle between honor and redemption in the shadowy world of the Yakuza.</p>
        </div>
      </div>
    </div>
  )
}
