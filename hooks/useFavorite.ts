import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useModal } from "./use-modal";
import { User } from "@prisma/client";

interface Props {
  listingId: string;
  currentUser?: User | null;
}

const useFavorite = ({ listingId, currentUser }: Props) => {
  const router = useRouter();
  const { onOpen } = useModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return onOpen("login");
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, onOpen, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
