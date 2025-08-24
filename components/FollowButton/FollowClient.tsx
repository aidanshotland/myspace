"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClien({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);

    console.log(res);

    startTransition(() => {
      //refresh current route
      //make a new request to server for route
      //refetches data requests and rerenders server components
      //sends the updated react server component payload to client
      //client merged the payload without losing unaffected client side react state
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);
    startTransition(() => router.refresh());
  };

  if (isFollowing) {
    return (
      <button onClick={unfollow}>{!isMutating ? "Unfollow" : "..."}</button>
    );
  } else {
    return <button onClick={follow}>{!isMutating ? "Follow" : "..."}</button>;
  }
}
