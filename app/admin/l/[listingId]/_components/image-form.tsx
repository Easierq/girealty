// "use client";

// import * as z from "zod";
// import axios from "axios";
// import { Pencil, PlusCircle, ImageIcon } from "lucide-react";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { Course } from "@prisma/client";
// import Image from "next/image";

// import { Button } from "@/components/ui/button";
// import { FileUpload } from "@/components/file-upload";

// interface ImageFormProps {
//   initialData: Course;
//   listingId: string;
// }

// const formSchema = z.object({
//   imageUrl: z.string().min(1, {
//     message: "Image is required",
//   }),
// });

// export const ImageForm = ({ initialData, listingId }: ImageFormProps) => {
//   const [isEditing, setIsEditing] = useState(false);

//   const toggleEdit = () => setIsEditing((current) => !current);

//   const router = useRouter();

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       await axios.patch(`/api/courses/${listingId}`, values);
//       toast.success("Course updated");
//       toggleEdit();
//       router.refresh();
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="mt-6 border-2 border-slate-300 bg-slate-50 rounded-md p-4 dark:bg-slate-800/80">
//       <div className="font-medium flex items-center justify-between dark:text-slate-300">
//         Course image
//         <Button onClick={toggleEdit} variant="ghost">
//           {isEditing && <>Cancel</>}
//           {!isEditing && !initialData.imageUrl && (
//             <>
//               <PlusCircle className="h-4 w-4" />
//               Add an image
//             </>
//           )}
//           {!isEditing && initialData.imageUrl && (
//             <>
//               <Pencil className="h-4 w-4 mr-2" />
//               Edit image
//             </>
//           )}
//         </Button>
//       </div>
//       {!isEditing &&
//         (!initialData.imageUrl ? (
//           <div className="flex items-center justify-center h-60 border-2 border-slate-300 bg-slate-50 dark:bg-slate-900/80 rounded-md">
//             <ImageIcon className="h-10 w-10 text-slate-500" />
//           </div>
//         ) : (
//           <div className="relative aspect-video mt-2">
//             <Image
//               alt="Upload"
//               fill
//               className="object-cover rounded-md"
//               src={initialData.imageUrl}
//             />
//           </div>
//         ))}
//       {isEditing && (
//         <div>
//           <FileUpload
//             endpoint="courseImage"
//             onChange={(url) => {
//               if (url) {
//                 onSubmit({ imageUrl: url });
//               }
//             }}
//           />
//           <div className="text-xs text-muted-foreground mt-4">
//             16:9 aspect ratio recommended
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // "use client";

// // import * as z from "zod";
// // import axios from "axios";
// // import { Pencil, PlusCircle, ImageIcon } from "lucide-react";
// // import { useState } from "react";
// // import toast from "react-hot-toast";
// // import { useRouter } from "next/navigation";
// // import { Course } from "@prisma/client";
// // import Image from "next/image";

// // import { Button } from "@/components/ui/button";
// // import { FileUpload } from "@/components/file-upload";

// // interface ImageFormProps {
// //   initialData: Course;
// //   listingId: string;
// // }

// // const formSchema = z.object({
// //   imageUrl: z.string().min(1, {
// //     message: "Image is required",
// //   }),
// // });

// // export const ImageForm = ({ initialData, listingId }: ImageFormProps) => {
// //   const [isEditing, setIsEditing] = useState(false);

// //   const toggleEdit = () => setIsEditing((current) => !current);

// //   const router = useRouter();

// //   const onSubmit = async (values: z.infer<typeof formSchema>) => {
// //     try {
// //       await axios.patch(`/api/courses/${listingId}`, values);
// //       toast.success("Course updated");
// //       toggleEdit();
// //       router.refresh();
// //     } catch {
// //       toast.error("Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="mt-6 border bg-slate-100 rounded-md p-4">
// //       <div className="font-medium flex items-center justify-between">
// //         Course image
// //         <Button onClick={toggleEdit} variant="ghost">
// //           {isEditing && <>Cancel</>}
// //           {!isEditing && !initialData.imageUrl && (
// //             <>
// //               <PlusCircle className="h-4 w-4 mr-2" />
// //               Add an image
// //             </>
// //           )}
// //           {!isEditing && initialData.imageUrl && (
// //             <>
// //               <Pencil className="h-4 w-4 mr-2" />
// //               Edit image
// //             </>
// //           )}
// //         </Button>
// //       </div>
// //       {!isEditing &&
// //         (!initialData.imageUrl ? (
// //           <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
// //             <ImageIcon className="h-10 w-10 text-slate-500" />
// //           </div>
// //         ) : (
// //           <div className="relative aspect-video mt-2">
// //             <Image
// //               alt="Upload"
// //               fill
// //               className="object-cover rounded-md"
// //               src={initialData.imageUrl}
// //             />
// //           </div>
// //         ))}
// //       {isEditing && (
// //         <div>
// //           <FileUpload
// //             endpoint="courseImage"
// //             onChange={(url) => {
// //               if (url) {
// //                 onSubmit({ imageUrl: url });
// //               }
// //             }}
// //           />
// //           <div className="text-xs text-muted-foreground mt-4">
// //             16:9 aspect ratio recommended
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };
