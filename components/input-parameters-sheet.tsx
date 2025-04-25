"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ParametersTypes } from "@/app/types"

// Validation schema
const formSchema = z.object({
  address: z.string().min(32, {
    message:
      "Address must be at least 32 characters for a Solana address or transaction hash.",
  }),
  startDate: z.date().nullable().optional(),
  endDate: z.date().nullable().optional(),
  minValue: z.coerce.number().min(0).optional(),
})

export function InputParametersSheet({
  parameters,
  onParametersChangeAction,
}: {
  parameters: ParametersTypes
  onParametersChangeAction: (newParameters: ParametersTypes) => void
}) {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  function onSubmit(values: ParametersTypes): void {
    onParametersChangeAction(values)
    setIsSheetOpen(false)
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: parameters.address || "",
      startDate: parameters.startDate || null,
      endDate: parameters.endDate || null,
      minValue: parameters.minValue || 0,
    },
  })

  const formContent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wallet Address or Transaction Hash</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Solana address or transaction hash"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter a valid Solana wallet address or transaction hash
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Date Range (Optional)</h3>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          const endDate = form.watch("endDate")
                          return (
                            date > new Date() || // Can't be future date
                            (endDate ? date > endDate : false) // Start date can't be after end date
                          )
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          const startDate = form.watch("startDate")
                          return (
                            date > new Date() ||
                            (startDate ? date < startDate : false) // End date can't be before start date
                          )
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="minValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum SOL Value (Optional)</FormLabel>
              <FormControl>
                <Input type="number" min="0" step="0.01" {...field} />
              </FormControl>
              <FormDescription>
                Filter transactions with value greater than this amount
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          <SearchIcon className="mr-2 h-4 w-4" />
          Visualize Transactions
        </Button>
      </form>
    </Form>
  )

  return (
    <>
      {/* Desktop sidebar - hidden on mobile, shown on md and up */}
      <div className="hidden md:block w-80 border-r bg-muted/10 p-6 overflow-y-auto">
        {formContent}
      </div>

      {/* Mobile sheet - shown on mobile, hidden on md and up */}
      <div className="md:hidden fixed left-4 top-20 z-50">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full bg-background shadow-md hover:bg-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[90%] sm:w-[440px] overflow-y-auto"
          >
            <h2 className="text-lg font-semibold mb-4">Input Parameters</h2>
            {formContent}
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
