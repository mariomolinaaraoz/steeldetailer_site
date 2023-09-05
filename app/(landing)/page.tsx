import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/Footer'

export const dynamic = 'force-dynamic'

export default async function Index() {  

  return (
    <div className="w-full h-120 flex flex-col items-center bg-[url('/hero-1920.jpg')]">
      <Navbar/>
      <div className="animate-in flex flex-col gap-14 opacity-100 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <h1 className="text-5xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
            BUILDING TOGETHER
          </h1>
          <div className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background">
            Get started by editing <strong>app/page.tsx</strong>
          </div>
        </div>

        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="flex flex-col gap-8 text-foreground">
          <h2 className="text-lg font-bold text-center">
            Everything you need to get started
          </h2>

        </div>

        <div className="flex flex-col gap-8 text-foreground">
          <div className="grid gap-2 justify-center mx-auto text-center">
            <h2 className="text-lg font-bold text-center">Examples</h2>
            <p className="text-sm">
              Look in the <code>_examples</code> folder to see how to create a
              Supabase client in all the different contexts.
            </p>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}