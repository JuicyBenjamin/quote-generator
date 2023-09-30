"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useState } from "react"
import Image from "next/image"

const formSchema = z.object({
  quote: z.string().max(20, {
    message: "Sorry m8, your quote needs to be shorter",
  }),
  occasion: z.string().max(20, {
    message: "Sorry m8, the occasion should be shorter"
  })
})

export default function Home() {
  const [quote, setQuote] = useState('Your quote here')
  const [occasion, setOccasion] = useState('Your occasion here')

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      quote: "",
      occasion: ""
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setQuote(values.quote)
    setOccasion(values.occasion)
  }
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center justify-between p-24">
      <h1>Quote Generator</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="quote"
            render={({ field }) => (
                <FormItem>
                  <FormLabel>Quote</FormLabel>
                  <FormControl>
                    <Input placeholder="fill in your quote here" {...field} />
                  </FormControl>
                  <FormDescription>
                    Just insert your favorite quote here
                  </FormDescription>
                  <FormMessage />
                </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occasion</FormLabel>
                <FormControl>
                  <Input placeholder="fill in the occasion here" {...field} />
                </FormControl>
                <FormDescription>
                  Just insert where this quoute was from
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"default"} type="submit">Submit</Button>
        </form>
      </Form>
      <div>
        <Image loading="lazy" width="1200" height="630" alt="" src={`/api/ronaldo-knees?quote=${quote}&occasion=${occasion}`} />
      </div>
    </main>
  )
}
