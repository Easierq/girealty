import React from "react";
import { ListingOrm } from "./components/listing-orm";
import Container from "@/components/container";
// import { ListingForm } from "./components/listing-form";

const Create = () => {
  return (
    <Container>
      <div className="min-h-[100vh] py-[100px]">
        <ListingOrm listingData={null} />
      </div>
    </Container>
  );
};

export default Create;
