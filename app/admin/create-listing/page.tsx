"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.string().min(1, {
    message: "Title is required",
  }),
  address: z.string().min(1, {
    message: "Title is required",
  }),
  price: z.coerce.number(),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      address: "",
      description: "",
      price: undefined,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/admin/listings/${response.data.id}`);
      // toast.success("Course created");
      // toast({
      //   variant: "default",
      //   description: "Course created successfully",
      // });
    } catch {
      // toast.error("Something went wrong");
      // toast({
      //   variant: "destructive",
      //   description: "Something went wrong.",
      // });
    }
  };

  return (
    <div className="max-w-5xl w-[600px] mx-auto flex md:items-center md:justify-center h-full p-6 py-[80px] min-h-[100vh]">
      <div className="w-full">
        <h1 className="text-xl md:text-2xl font-semibold">Create listing.</h1>
        {/* <p className="text-sm text-slate-600">
          What would you like the title of your listing to be? Don&apos;t worry,
          you can change this later.
        </p> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl className="">
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Bungalow white, For Sale in San Diego'"
                      className="border-2 border-gray-300 rounded-[8px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl className="">
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Address of listing...'"
                      className="border-2 border-gray-300 rounded-[8px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="e.g. 'Description of listing...'"
                      className="border-2 border-gray-300 rounded-[8px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      disabled={isSubmitting}
                      placeholder="Set a price for your listing"
                      className="border-2 border-gray-300 rounded-[8px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button
                variant="primary"
                type="submit"
                disabled={!isValid || isSubmitting}
                className="rounded-[8px]"
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
