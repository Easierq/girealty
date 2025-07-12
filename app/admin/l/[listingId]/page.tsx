import { db } from "@/lib/db";
// import LoadingPage from "./_components/loading-page";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
// import { ImageForm } from "./_components/image-form";
import { PriceForm } from "./_components/price-form";

import { Actions } from "./_components/actions";
import { PublishButton } from "./_components/publish-button";
import Container from "@/components/container";
import { BathroomForm } from "./_components/bathroom-form";
import { BedroomForm } from "./_components/bedroom-form";
import { CategoryForm } from "./_components/category-form";

const categories = [
  {
    id: "1",
    name: "Next.js",
  },
  {
    id: "2",
    name: "SvelteKit",
  },
  {
    id: "3",
    name: "Nuxt.js",
  },
];

const listing = {
  id: "123",
  title: "listing title",
  address: "listing address",
  description: "listing description",
  category: "Next.js",
  price: 1000,
  bathroom: undefined,
  bedroom: 1000,
};

const ListingIdPage = async ({ params }: { params: { courseId: string } }) => {
  // const listing = await db.listing.findUnique({
  //   where: {
  //     id: params.listingId,
  //   },
  // });

  const requiredFields = [
    listing.title,
    listing.description,
    listing.address,
    listing.price,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <Container>
      <div className="h-full min-h-[90vh]">
        <div className="py-[80px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                Complete all fields {completionText}
              </span>
            </div>
            <Actions
              showDelete={true}
              showPublish={false}
              disabled={false}
              listingId="123"
              isPublished={false}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <TitleForm initialData={listing} listingId={listing.id} />
              <DescriptionForm initialData={listing} listingId={listing.id} />
              {/* <ImageForm initialData={listing} listingId={listing.id} /> */}
              <div className="mt-6 grid gap-x-2 gap-y-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                <BathroomForm initialData={listing} listingId={listing.id} />
                <BedroomForm initialData={listing} listingId={listing.id} />
                <CategoryForm initialData={listing} listingId={listing.id} />
              </div>
            </div>
            <div className="space-y-6">
              <div></div>
              <div>
                <PriceForm initialData={listing} listingId={listing.id} />
              </div>
              <div></div>
              <div className="flex flex-col">
                <PublishButton
                  showDelete={false}
                  showPublish={true}
                  disabled={false}
                  listingId={"123"}
                  isPublished={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingIdPage;
