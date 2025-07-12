"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

import { Input } from "@/components/ui/input";
import { DeleteModal } from "@/components/delete-modal";
import { Image, Listing } from "@prisma/client";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import ImageUpload from "@/components/image-upload";

const types = [
  { label: "Condo", value: "condo" },
  { label: "Flat", value: "flat" },
  { label: "Land", value: "land" },
  { label: "Apartment", value: "Apartment" },
];
const categories = [
  { label: "Rent", value: "rent" },
  { label: "Buy", value: "buy" },
];
const parks = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const formSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  address: z.string().min(1),
  category: z.string().min(1),
  type: z.string().min(1),
  latitude: z.string().min(1),
  longitude: z.string().min(1),

  isFeatured: z.boolean().default(false),
  isNew: z.boolean().default(false),
  images: z.object({ url: z.string() }).array(),

  bedroom: z.string().min(1),
  bathroom: z.string().min(1),
  park: z.string().min(1),
  price: z.coerce.number().min(1),
});

type FormValues = z.infer<typeof formSchema>;

interface Props {
  listingData: (Listing & { images: Image[] }) | null;
}

export const ListingForm = ({ listingData }: Props) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const [loading, setLoading] = useState(false);

  const initial = listingData?.title;
  const title = initial ? "Edit Listing" : "Create Listing";
  const description = initial
    ? "Make change to this listing"
    : "Add a new listing";
  const toastMessage = initial ? "Listing Updated." : "Listing Created.";
  const action = initial ? "Update changes" : "Create";

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: listingData || {
      title: "",
      description: "",
      address: "",
      category: "",
      type: "",

      latitude: "",
      longitude: "",

      isFeatured: false,
      isNew: false,

      images: [],
      bedroom: "",
      bathroom: "",
      park: "",
      price: 0,
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    try {
      setLoading(true);
      if (listingData) {
        await axios.patch(`/api/listings/${params.id}`, data);
      } else {
        await axios.post("/api/listings", data);
      }
      router.refresh();
      router.push("/admin");
      toast({
        variant: "default",
        description: toastMessage,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/listings/${params.id}`);
      router.refresh();
      router.push("/admin");
      toast({
        variant: "default",
        description: "Course deleted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <DeleteModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <div className="mb-5">
          <h2 className="text-3xl font-semibold text-slate-700 tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground text-slate-400">
            {description}
          </p>
        </div>
        {listingData?.createdAt && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4 text-white" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value.map((image) => image.url)}
                      disabled={loading}
                      onChange={(url) =>
                        field.onChange([...field.value, { url }])
                      }
                      onRemove={(url) =>
                        field.onChange([
                          ...field.value.filter(
                            (current) => current.url !== url
                          ),
                        ])
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Enter title..."
                      {...field}
                      className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500"
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
                  <FormLabel className="text-slate-600">Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Enter description..."
                      {...field}
                      className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500"
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
                  <FormLabel className="text-slate-600">Address</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Enter address..."
                      {...field}
                      className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Category</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select category"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel className="text-sm text-slate-500 font-medium">
                          Category
                        </SelectLabel>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                            className="text-sm font-semibold"
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Type</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select type"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel className="text-sm text-slate-500 font-medium">
                          Type
                        </SelectLabel>
                        {types.map((type) => (
                          <SelectItem
                            key={type.value}
                            value={type.value}
                            className="text-sm font-semibold"
                          >
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="latitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Latitude</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={loading}
                      placeholder="Enter latitude..."
                      {...field}
                      className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="longitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Longtitude</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={loading}
                      placeholder="Enter longtitude..."
                      {...field}
                      className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bedroom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Bedroom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      disabled={loading}
                      placeholder="Enter bedroom..."
                      {...field}
                      className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Bathroom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      disabled={loading}
                      placeholder="Enter bathroom..."
                      {...field}
                      className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="park"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Park</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Park available"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel className="text-sm text-slate-500 font-medium">
                          Park
                        </SelectLabel>
                        {parks.map((park) => (
                          <SelectItem
                            key={park.value}
                            value={park.value}
                            className="text-sm font-semibold"
                          >
                            {park.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      disabled={loading}
                      placeholder="Enter price..."
                      {...field}
                      className="border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isFeatured"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Featured</FormLabel>
                  <div className="flex items-center justify-between rounded-xl px-3 py-2 bg-slate-100/40">
                    <p className="text-slate-600 text-sm font-semibold shrink-0">
                      Yes/No
                    </p>
                    <FormControl>
                      <Switch
                        disabled={loading}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      >
                        {value ? "On" : "Off"}
                      </Switch>
                    </FormControl>
                    {/* <div className="space-y-1 leading-none">
                    <FormDescription>
                      This product will appear on the home page.
                    </FormDescription>
                  </div> */}
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isNew"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Newly added</FormLabel>
                  <div className="flex items-center justify-between rounded-xl px-3 py-2 bg-slate-100/40">
                    <p className="text-slate-600 text-sm font-semibold shrink-0">
                      Yes/No
                    </p>
                    <FormControl>
                      <Switch
                        disabled={loading}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      >
                        {value ? "On" : "Off"}
                      </Switch>
                    </FormControl>
                    {/* <div className="space-y-1 leading-none">
                    <FormDescription>
                      This product will appear on the home page.
                    </FormDescription>
                  </div> */}
                  </div>
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
                      disabled={loading}
                      placeholder="Enter description..."
                      className="border-2 border-gray-300 rounded-[8px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={loading}
            className="ml-auto bg-slate-900 text-white hover:text-white hover:bg-slate-900/90 rounded-full px-5"
            type="submit"
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

// border-2 border-gray-300 rounded-[8px] placeholder:text-gray-500
