"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "./confirm-modal";
// import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ActionsProps {
  showDelete?: boolean;
  showPublish?: boolean;
  disabled: boolean;
  listingId: string;
  isPublished: boolean;
}

export const Actions = ({
  showDelete,
  showPublish,
  disabled,
  listingId,
  isPublished,
}: ActionsProps) => {
  const router = useRouter();
  // const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/listing/${listingId}/unpublish`);
        toast.success("Listing unpublished");
      } else {
        await axios.patch(`/api/listing/${listingId}/publish`);
        toast.success("Listing published");
        // confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/listing/${listingId}`);

      toast.success("Listing deleted");
      router.refresh();
      router.push(`/admin`);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      {showPublish && (
        <Button
          onClick={onClick}
          disabled={disabled || isLoading}
          variant="primary"
          size="sm"
          className=""
        >
          {isPublished ? "Unpublish" : "Publish"}
        </Button>
      )}
      <ConfirmModal onConfirm={onDelete}>
        {showDelete && (
          <Button size="sm" disabled={isLoading}>
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </ConfirmModal>
    </div>
  );
};
