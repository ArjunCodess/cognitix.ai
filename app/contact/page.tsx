"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/phone-input";
import { DatePicker } from "@/components/date-input";

const formSchema = z.object({
  company_name: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  contact_name: z.string().min(2, {
    message: "Contact Person's Name must be at least 2 characters.",
  }),
  industry: z.string().min(2, {
    message: "Industry name must be at least 2 characters.",
  }),
  business_challenge: z.string().min(2, {
    message: "Industry name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: "",
      email: "",
      contact_name: "",
      industry: "",
      business_challenge: "",
    },
  });

  function onSubmit() {
    window.location.reload();
  }

  return (
    <div className="w-full mx-auto max-w-xl py-20">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <h2 className="font-bold text-2xl">Book a Call</h2>
            <p className="text-muted-foreground text-sm">
              We'll get back to you within 24 hours
            </p>
          </div>
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="John Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person's Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="John Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormLabel>Contact Person's Phone Number</FormLabel>
          <PhoneInput />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="you@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="Technology"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="business_challenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Challenge</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="We need to implement a RAG chatbot for our documentation."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DatePicker />
          <Button className="w-full" type="submit" onClick={() => onSubmit()}>
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactPage;
